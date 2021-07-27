import { routesWs } from 'src/constants/routes';
import { put, takeEvery, select, call, take } from 'redux-saga/effects';
import { Stomp, CompatClient } from '@stomp/stompjs';
import { CONNECT_WS, CREATE_GAME, SUBSCRIBE_ROOM, JOIN_ROOM, GET_STEP_ORDER, DO_TIC_STEP, JOIN_ROOM_BOT, SUBSCRIBE_ROOM_BOT, BOT_STEP, DO_BOT_STEP } from './actionTypes';
import { getRooms } from './actions';
import { getUserName } from '../user/selectors';
import { typeGame, getIdGame, getGameTypeRoom, getStepTic, getRoomsSub} from '../connectWS/selectors';
import cookie from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';
import { eventChannel, SagaIterator } from 'redux-saga';
import { onmessage, onmessageBot } from '../../helpers/onmessage';

let stompClient: CompatClient | null = null;
let token = cookie.get('token');

 function connect(token: string) {
    const socket = new WebSocket(`${routesWs.urlWs}${routesWs.gameMenu}`);
    stompClient = Stomp.over(socket);
    return new Promise(resolve => stompClient
        .connect({ Authorization: `Bearer ${token}` }, () => resolve(stompClient)));
}

export const createStompChannel = (stompClient: CompatClient) => eventChannel((emit) => {
    const roomsSub = stompClient.subscribe(routesWs.topic.rooms, ({ body }) => emit(getRooms(JSON.parse(body))));
    return () => {
        roomsSub.unsubscribe();
    };
});

export const init = (stompClient: CompatClient) => {
    stompClient.send(routesWs.updateRoom);
};

function* connectWsWorker(): SagaIterator {
    const stompClient = yield call(connect, token);
    const stompChannel = yield call(createStompChannel, stompClient);
    yield call(init, stompClient);
    while (stompChannel) {
        const action = yield take(stompChannel);
       yield call(workerSubscribeRoom);
        yield put(action);
    }
}

export function* createRoomWorker(): SagaIterator {
    const creatorLogin = yield select(getUserName); 
    const gameType = yield select(typeGame);
    const uuid = uuidv4();
    const body = {
        creatorLogin,
        gameType,
        id: uuid,
    };
    console.log(body)
    yield call([stompClient, stompClient.send], routesWs.createRoom, { Authorization: token }, JSON.stringify(body));
    yield call([stompClient, stompClient.send], routesWs.updateRoom, { Authorization: token });
}

export function* workerSubscribeRoom(): SagaIterator {
    let idGetGame;
    const getRooms = yield select(getRoomsSub);
    const userLogin = yield select(getUserName);
    const actualRoom = getRooms.find(el => el.creatorLogin === userLogin);
    if(actualRoom){
        idGetGame = actualRoom.id
    } else {
        idGetGame = yield select(getIdGame);
    }

    yield call([stompClient, stompClient.subscribe], `/topic/game/${idGetGame}`, onmessage);
}

export function* workerJoinRoom(): SagaIterator { 
    const idGetGame = yield select(getIdGame);
    const userLogin = yield select(getUserName); 
    const body = { guestLogin: userLogin, id: idGetGame };
    console.log("JoinRoom", body)
    yield call([stompClient, stompClient.send], routesWs.joinRoom, {}, JSON.stringify(body));
}

export function* workerGetStepOrder(): SagaIterator  {
    let idGetGame = yield select(getIdGame);
    let getGameType = yield select(getGameTypeRoom);
    yield call([stompClient, stompClient.send], '/radioactive/get-step-order',
        { uuid: idGetGame }, JSON.stringify({ gameType: getGameType }));
}

export function* workerTicStep(): SagaIterator {
    const id = yield select(getIdGame);
    const gameType = yield select(getGameTypeRoom);
    const userLogin = yield select(getUserName);
    const step = yield select(getStepTic)
    const body = {
        gameType,
        stepDto: {login: userLogin, step: step, time: Date.now(), id}
    }
    console.log(body)
    yield call([stompClient, stompClient.send], '/radioactive/do-step', { uuid: id }, JSON.stringify(body));
    yield call(workerGetStepOrder);
}

//--------------------------------------

export function* workerSubscribeRoomBot(): SagaIterator {
    let idGetGame;
    const getRooms = yield select(getRoomsSub);
    const userLogin = yield select(getUserName);
    const actualRoom = getRooms.find(el => el.creatorLogin === userLogin);
    if(actualRoom){
        idGetGame = actualRoom.id
    } else {
        idGetGame = yield select(getIdGame);
    }
    //yield call([stompClient, stompClient.subscribe], `/topic/game/${idGetGame}`, onmessage);
    yield call([stompClient, stompClient.subscribe], `/topic/bot/${idGetGame}`, onmessageBot);
}

export function* workerDoBotStep({ payload }: any): SagaIterator { // шаг бота
    console.log("------", payload)
    const id = yield select(getIdGame);
    const gameType = yield select(getGameTypeRoom);
    const userLogin = 'Bot';
    const body = {
        gameType,
        stepDto: {login: userLogin, step: payload, time: Date.now(), id}
    }
    yield call([stompClient, stompClient.send], '/radioactive/do-step', { uuid: id }, JSON.stringify(body));
    yield call(workerGetStepOrder);
}

export function* workerGetBotStep(): SagaIterator {
    const id = yield select(getIdGame);
    const gameType = yield select(getGameTypeRoom);
    const body = { id, gameType };
    console.log("workerGetBotStep", body)
    yield call([stompClient, stompClient.send], '/radioactive/get-bot-step', { uuid: id }, JSON.stringify(body));
}

export function* workerJoinRoomBot(): SagaIterator { 
    const idGetGame = yield select(getIdGame);
    const userLogin = "Bot"; 
    const body = { guestLogin: userLogin, id: idGetGame };
    console.log("JoinRoom", body)
    yield call([stompClient, stompClient.send], routesWs.joinRoom, {}, JSON.stringify(body));
}

export function* connectWsWatcher() {
    yield takeEvery(CONNECT_WS, connectWsWorker);
    yield takeEvery(CREATE_GAME, createRoomWorker);
    yield takeEvery(SUBSCRIBE_ROOM, workerSubscribeRoom);
    yield takeEvery(JOIN_ROOM, workerJoinRoom);
    yield takeEvery(GET_STEP_ORDER, workerGetStepOrder);
    yield takeEvery(DO_TIC_STEP, workerTicStep);
    yield takeEvery(JOIN_ROOM_BOT, workerJoinRoomBot);
    yield takeEvery(SUBSCRIBE_ROOM_BOT, workerSubscribeRoomBot);
    yield takeEvery(BOT_STEP, workerGetBotStep);
    yield takeEvery(DO_BOT_STEP,workerDoBotStep);
}




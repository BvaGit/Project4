import { routesWs } from 'src/constants/routes';
import { put, takeEvery, select, call, take } from 'redux-saga/effects';
import { Stomp, CompatClient } from '@stomp/stompjs';
import { CONNECT_WS, CREATE_GAME, CONNECT_BOT } from './actionTypes';
import { getRooms, botGame } from './actions';
import { getUserName } from '../user/selectors';
import { typeGame, getStep, getTime, getGameId, getCreatorLogin } from '../connectWS/selectors';
import cookie from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';
import { eventChannel, SagaIterator } from 'redux-saga';

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
    const errorSub = stompClient.subscribe(routesWs.topic.userGame, ({ masError }: any) => console.log(JSON.parse(masError.body)));
    return () => {
        roomsSub.unsubscribe();
        errorSub.unsubscribe();
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
        const payload = yield take(stompChannel);
        yield put(payload);
    }
}

export function* createRoomWorker(): SagaIterator {
    const uuid = uuidv4();
    localStorage.setItem('id', uuid);
    const creatorLogin = yield select(getUserName); 
    const gameType = yield select(typeGame);
    const body = {
        creatorLogin,
        gameType,
        id: uuid,
    };
    yield call([stompClient, stompClient.send], routesWs.createRoom, { Authorization: token }, JSON.stringify(body));
    yield call([stompClient, stompClient.send], routesWs.updateRoom, { Authorization: token });
}

export function* workerSubscribeRoom(id: string): SagaIterator {
    yield call([stompClient, stompClient.subscribe], `${routesWs.topic.game}${id}`, (mas) => console.log(JSON.parse(mas.body)));
}

function* connectBotWorker(): SagaIterator {
    const id = yield select(getGameId);
    const getCreateGame = yield select(getCreatorLogin);
    yield call(workerSubscribeRoom, id);
    const body = {
        guestLogin: getCreateGame,
        id 
    }
    console.log(body)
    const data = yield call([stompClient, stompClient.send], routesWs.joinRoom, {}, JSON.stringify(body));
    const game = {
        gameType: "Tic-tac-toe"
    }

    //--------------------
    console.log(body)
    const order = yield call([stompClient, stompClient.send], routesWs.getStepOrder, {uuid: id}, JSON.stringify(game));
}

export function* gameWorker(): SagaIterator{
    const creatorLogin = yield select(getUserName); 
    const gameType = yield select(typeGame);
    const step = yield select(getStep);
    const time = yield select(getTime);
    const id = select(getGameId);
    const body = {
        gameType,
        stepDto: {
            creatorLogin,
            step,
            time,
            id
        }
    }
    console.log(body);
}

export function* connectWsWatcher() {
    yield takeEvery(CONNECT_WS, connectWsWorker);
    yield takeEvery(CREATE_GAME, createRoomWorker);
    yield takeEvery(CONNECT_BOT, connectBotWorker);
}
import { routesWs } from 'src/constants/routes';
import { put, takeEvery, select, call, take } from 'redux-saga/effects';
import { Stomp, CompatClient } from '@stomp/stompjs';
import { CONNECT_WS, CREATE_GAME } from './actionTypes';
import { getRooms } from './actions';
import { getUserName } from '../user/selectors';
import { typeGame } from '../connectWS/selectors';
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
        const payload = yield take(stompChannel);
        yield put(payload);
    }
}

export function* createRoomWorker(): SagaIterator {
    const creatorLogin = yield select(getUserName); 
    const gameType = yield select(typeGame);
    const body = {
        creatorLogin,
        gameType,
        id: uuidv4(),
    };
    console.log(body)
    yield call([stompClient, stompClient.send], routesWs.createRoom, { Authorization: token }, JSON.stringify(body));
    yield call([stompClient, stompClient.send], routesWs.updateRoom, { Authorization: token });
}

export function* connectWsWatcher() {
    yield takeEvery(CONNECT_WS, connectWsWorker);
    yield takeEvery(CREATE_GAME, createRoomWorker);
}
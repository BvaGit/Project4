import { routesWs } from 'src/constants/routes';
import { put, takeEvery, select, call, take } from 'redux-saga/effects';
import { Stomp, CompatClient } from '@stomp/stompjs';
import { CONNECT_WS,  } from './actionTypes';
import { getRooms } from './actions';
import cookie from 'js-cookie';
import { eventChannel, SagaIterator } from 'redux-saga';

let stompClient: CompatClient | null = null;

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
    const stompClient = yield call(connect, cookie.get('token'));
    const stompChannel = yield call(createStompChannel, stompClient);
    yield call(init, stompClient);
    while (stompChannel) {
        const payload = yield take(stompChannel);
        yield put(payload);
    }
}

export function* connectWsWatcher() {
    yield takeEvery(CONNECT_WS, connectWsWorker);
}
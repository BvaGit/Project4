import { routesWs } from 'src/constants/routes';
import SockJS from 'sockjs-client';
import { put, takeEvery, select, call } from 'redux-saga/effects';
import { Stomp } from '@stomp/stompjs';
import { CONNECT_WS } from './actionTypes';
import cookie from 'js-cookie';
import { SagaIterator } from '@redux-saga/types';



 function connection(token: any) {
    const socket = new SockJS(`${routesWs.urlWs}${routesWs.gameMenu}`);
    const stompClient = Stomp.over(socket);
    stompClient.connect({ Authorization: `Bearer ${token}` }, (frame: any) => {
        console.log('connect' + frame)
        stompClient.subscribe('/updateRoom', (message:any) => {
            console.log("------",JSON.parse(message.body).content)
        })
        // you can subscribe here!
     });
    // return stompClient;
}

function* connectWsWorker(): SagaIterator {
    const stompClient = yield call(connection, cookie.get('token'));
    console.log('stompClient', stompClient);
}

export function* connectWsWatcher() {
    yield takeEvery(CONNECT_WS, connectWsWorker);
}
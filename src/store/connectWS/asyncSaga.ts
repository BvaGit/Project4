import { routesWs } from 'src/constants/routes';
import SockJS from 'sockjs-client';
import { put, takeEvery, select, call } from 'redux-saga/effects';
import { Stomp } from '@stomp/stompjs';
import { CONNECT_WS } from './actionTypes';
import cookie from 'js-cookie';
import { SagaIterator } from '@redux-saga/types';



 function connect(token: any) {
    var client = Stomp.client(`${routesWs.urlWs}${routesWs.gameMenu}`);
    console.log(client)
    client.connect({ Authorization: `Bearer ${token}` }, frame => {
        console.log(frame)
        var subscription = client.subscribe("ws://35.176.167.155:8089/updateRoom", function(message) {
           
          });
    });


    // const socket = new WebSocket(`${routesWs.urlWs}${routesWs.gameMenu}`);
    // const stompClient = Stomp.over(socket);
    // stompClient.connect({ Authorization: `Bearer ${token}` }, (frame: any) => {
    //     console.log('connect' + frame)
    //     stompClient.subscribe('/radioactive/updateRoom', (message:any) => {
           
    //     })
        
    //  });
}

function* connectWsWorker(): SagaIterator {
    const stompClient = yield call(connect, cookie.get('token'));
}

export function* connectWsWatcher() {
    yield takeEvery(CONNECT_WS, connectWsWorker);
}
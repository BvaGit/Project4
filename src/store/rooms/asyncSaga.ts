import { put, takeEvery, select, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/types';
import { SEND_GET_ROOMS } from './actionTypes';
import cookie from "js-cookie";
import { routes } from '../../constants/routes';
import { fetchGet } from '../../helpers/request';
import SockJS from 'sockjs-client';

const token = cookie.get("token");

const sockConnect = () => new SockJS('http://35.176.167.155:8089/game-menu',{
    headers: {'Authorization': 'Bearer ' + token}
});

function* RoomsWorker(): SagaIterator {
    console.log(sockConnect)
    try {
        const answer = yield call(sockConnect)
        console.log("----",answer)
    } catch (e) {
        console.log(e)
    }
}

export function* roomsWatcher(): any {
    yield takeEvery(SEND_GET_ROOMS, RoomsWorker)
}
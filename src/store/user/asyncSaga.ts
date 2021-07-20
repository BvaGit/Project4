import { put, takeEvery, select, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/types';
import cookie from 'js-cookie';
import { IS_USER_NAME } from './actionTypes';
import { setUserName } from './actions';

function* SetNameUserWorker(): SagaIterator {
    try {
        yield put(setUserName(cookie.get("userName"))); 
    } catch (e) {
        console.log(e);
    }
}

export function* SetNameUserWatcher() {
    yield takeEvery(IS_USER_NAME, SetNameUserWorker);
}
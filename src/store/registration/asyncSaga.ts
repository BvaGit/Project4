import { put, takeEvery, select, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/types';
import { regValues } from './selectors';
import { SEND_REGISTRATION } from './actionTypes';
import history from '../../helpers/history';
import { routes } from '../../constants/routes';
import { fetchRegisterAuth } from '../../helpers/request';

function* RegisterWorker(): SagaIterator {
    try {
        const data = yield select(regValues);
        const body = {
            login: data.login,
            password: data.password
        }
        const answer = yield call(fetchRegisterAuth, routes.account.registration, body)
        if(answer.status === 201){
            history.push('/')
        }
    } catch (e) {
        console.log(e)
    }
}

export function* registerWatcher(): any {
    yield takeEvery(SEND_REGISTRATION, RegisterWorker)
}
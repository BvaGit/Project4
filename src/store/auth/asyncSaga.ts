import { put, takeEvery, select, call } from 'redux-saga/effects';
import cookie from 'js-cookie';
import { SEND_AUTH } from './actionTypes';
import history from '../../helpers/history';
import { getAuthFieldsStore } from './selectors';
import { routes } from '../../constants/routes';
import { fetchRegisterAuth } from '../../helpers/request';

function* AuthWorker(): any {
    try {
        const data = yield select(getAuthFieldsStore);
        const body = {
            login: data.login,
            password: data.password
        }
        const answer = yield call(fetchRegisterAuth, routes.account.auth, body);
        if(answer.status === 200){
            const token = yield answer.text();
            cookie.set("token", token);
            history.push('/main');
        }
    } catch (e) {
        console.log(e);
    }
}

export function* authWatcher(): any {
    yield takeEvery(SEND_AUTH, AuthWorker);
}

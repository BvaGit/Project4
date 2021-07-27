import { put, takeEvery, select, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/types';
import cookie from 'js-cookie';
import { SEND_AUTH } from './actionTypes';
import history from '../../helpers/history';
import { getAuthFieldsStore } from './selectors';
import { setUserName } from '../user/actions';
import { routes } from '../../constants/routes';
import { fetchRegisterAuth } from '../../helpers/request';
import { clearFields } from './actions'

function* AuthWorker(): SagaIterator {
    try {
        const data = yield select(getAuthFieldsStore);
        const body = {
            login: data.login,
            password: data.password
        }
        const answer = yield call(fetchRegisterAuth, routes.account.auth, body);
        if(answer.status === 200){
            yield (put(clearFields()));
            const token = yield answer.text();
            cookie.set("token", token);
            cookie.set("userName", data.login);
            yield put(setUserName(data.login));
            history.push('/main');
        }
    } catch (e) {
        console.log(e);
    }
}

export function* authWatcher() {
    yield takeEvery(SEND_AUTH, AuthWorker);
}

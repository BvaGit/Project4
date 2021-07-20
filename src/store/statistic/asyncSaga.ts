import { put, takeEvery, select, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/types';
import { IS_STATISTIC } from './actionTypes';
import cookie from 'js-cookie';
import { routes } from '../../constants/routes';
import { fetchPostRequest } from '../../helpers/request';

function* StatisticWorker(): SagaIterator {
    try {
        const userName = cookie.get("userName");

        const data = {
           'username': userName
        }
        
        const answer = yield call(fetchPostRequest, routes.statistic, data);
        console.log(answer)
        // yield put(getStatistic(answer));
    } catch (e) {
        console.log(e)
    }
}

export function* StatisticWatcher(): any {
    yield takeEvery(IS_STATISTIC, StatisticWorker)
}
import { put, takeEvery, select, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/types';
import { IS_STATISTIC } from './actionTypes';
import cookie from 'js-cookie';
import { routes } from '../../constants/routes';
import { fetchPostRequest } from '../../helpers/request';
import { getStatistic } from './actions'

function* StatisticWorker(): SagaIterator {
    try {
        const username = cookie.get("userName");
        const data = { username }
        const answer = yield call(fetchPostRequest, routes.statistic, data);
        const statisticData = yield call([answer, "json"])
        yield put(getStatistic(statisticData))
    } catch (e) {
        console.log(e)
    }
}

export function* StatisticWatcher(): any {
    yield takeEvery(IS_STATISTIC, StatisticWorker)
}
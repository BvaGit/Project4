import { all } from '@redux-saga/core/effects';
import { registerWatcher } from './registration/asyncSaga';
import { authWatcher } from './auth/asyncSaga';
import { SetNameUserWatcher } from './user/asyncSaga';
import { StatisticWatcher } from './statistic/asyncSaga'

export function* sagaRoot() {
    yield all([
        registerWatcher(),
        authWatcher(),
        SetNameUserWatcher(),
        StatisticWatcher()
    ])
}

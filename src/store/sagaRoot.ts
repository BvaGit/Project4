import { all } from '@redux-saga/core/effects';
import { registerWatcher } from './registration/asyncSaga';
import { authWatcher } from './auth/asyncSaga';

export function* sagaRoot() {
    yield all([
        registerWatcher(),
        authWatcher()
    ])
}

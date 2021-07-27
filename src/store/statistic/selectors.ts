import { createSelector } from 'reselect';
import { IStatUUID } from './types';

export const getStatisticStore = (state) => state.statistic
export const getStatisticByUuid = createSelector(
    getStatisticStore,
    (data): Array<IStatUUID> => data.statistic,
);
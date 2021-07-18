import * as AT from './actionTypes';

export const getStatistic = (payload: any) => ({type: AT.GET_STATISTIC, payload});
export const isStatistic = () => ({type: AT.IS_STATISTIC});
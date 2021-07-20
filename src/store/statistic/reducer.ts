import * as AT from './actionTypes'

const initialState = {
    statistic: {},
    isStatistic: false
}

export const statisticReducer = (state = initialState, action) => {
    switch (action.type) {
        case AT.GET_STATISTIC:
            return {
                statistic: action.payload
            }
        case AT.IS_STATISTIC:
            return {
                ...state,
                isStatistic: true
            }
        default:
            return state
    }
}
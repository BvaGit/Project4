import * as Types from '../types';
import * as AT from './actionTypes';

const initialState: Types.TRoomsState = {
    rooms: [],
    connectWS: false
}

export const connectWsReducer = (state = initialState, action: Types.TActionRooms): Types.TRoomsState  => {
    switch(action.type) {
        case AT.GET_ROOMS:
            return {
                ...state,
                rooms: action.payload
            }
        case AT.CONNECT_WS:
            return {
                ...state,
                connectWS: true
            }
        default: {
            return state
        }
    }
}

import * as Types from '../types';
import * as AT from './actionTypes';

const initialState: Types.TRoomsState = {
    rooms: [{creatorLogin: "ufora", gameType: "Checkers", id:"a1b56ce2-bce1-44eb-b6c1-eee5ff112f2c"}],
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

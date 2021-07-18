import * as Types from '../types';
import * as AT from './actionTypes';

const initialState: Types.TRoomsState = {
    rooms: [],
    isRooms: false
}

export const roomsReducer = (state = initialState, action: Types.TActionRooms): Types.TRoomsState  => {
    switch(action.type) {
        case AT.GET_ROOMS:
            return {
                ...state,
                rooms: action.payload
            }
        case AT.SEND_GET_ROOMS:
            return {
                ...state,
                isRooms: true
            }
        default: {
            return state
        }
    }
}

import * as Types from '../types';
import * as AT from './actionTypes';

const initialState: Types.TRoomsState = {
    rooms: [{creatorLogin: "ufora", gameType: "Checkers", id:"a1b56ce2-bce1-44eb-b6c1-eee5ff112f2c"}],
    connectWS: false,
    createGame: false,
    gameType: 'Checkers',
    gameTypeRoom: '',
    idGame: '',
    step: '',
    stepOrder: '',
    stepG: '',
    login: '',
    field: [null, null, null, null, null, null, null, null, null]
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
        case AT.GAME_TYPE:
            return {
                ...state,
                gameType: action.payload
            }
        case AT.CREATE_GAME:
            return {
                ...state,
                createGame: true
            }
        case AT.ID_GAME:
            return {
                ...state,
                idGame: action.payload
            }
        case AT.SET_GAME_TYPE_ROOM: 
            return {
                ...state,
                gameTypeRoom: action.payload
            }
        case AT.SET_STEP:
            return {
                ...state,
                step: action.payload
            }
        case AT.STEP_G: 
            return {
                ...state,
                stepG: action.payload
            }
        case AT.LOGIN: 
            return {
                ...state,
                login: action.payload
            }
        case AT.FIELD: 
            return {
                ...state,
                field: action.payload
            }
        default: {
            return state
        }
    }
}

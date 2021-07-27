import * as AT from "./actionTypes";

const initialState = {
  userName: '',
  isUserName: false,
  gameTypeContainer: ''
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case AT.SET_USER_NAME: {
      return {
        ...state,
        userName: action.payload
      }
    }
    case AT.IS_USER_NAME: 
    return {
      ...state,
      isUserName: true
    }
    case AT.GAME_TYPE_CONTAINER:
      return {
        ...state,
        gameTypeContainer: action.payload
      }
    default:
      return state;
  }
};

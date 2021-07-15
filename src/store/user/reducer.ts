import * as AT from "./actionTypes";

const initialState = {
  token: ''
};

export const registrationReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case AT.GET_TOKEN: {
      return {
        ...state,
        token: action.payload
      }
    }
    default:
      return state;
  }
};

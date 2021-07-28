import * as AT from '/src/store/auth/actionTypes';
import * as Types from '../types';

const initialState = {
  fields: {
    login: "",
    password: "",
  },
  errors: {
    login: "",
    password: "",
  },
  isSuccess: false
};

export const authReducer = (state = initialState, action: Types.TAction): Types.TRegistrAuth  => {
  switch (action.type) {
    case AT.CHANGE_AUTH_FIELD:
      // eslint-disable-next-line no-case-declarations
      const newFields = {
        ...state.fields,
        ...action.payload,
      };
      return {
        ...state,
        fields: newFields,
      };
    case AT.CHANGE_AUTH_FIELD_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          ...action.payload,
        },
      };
    case AT.SEND_AUTH:
      return {
        ...state,
        isSuccess: true
      }
    case AT.CLEAR_FIELDS: 
      return {
        ...state,
        fields: {
          login: "",
          password: "",
        },
      }
    default:
      return state;
  }
};

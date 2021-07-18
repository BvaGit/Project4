import * as AT from './actionTypes';
import * as Types from '../types';

export const changeAuthField = (payload: Types.TPayload) => ({type: AT.CHANGE_AUTH_FIELD, payload});
export const changeAuthFieldError = (payload: Types.TPayload) => ({type: AT.CHANGE_AUTH_FIELD_ERROR, payload}); 
export const sendAuth = () => ({type: AT.SEND_AUTH});

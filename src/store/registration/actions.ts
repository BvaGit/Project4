import * as AT from './actionTypes';
import * as Types from '../types';

export const changeRegistrationField = (payload: Types.TPayload) => ({type: AT.CHANGE_REGISTRATION_FIELD, payload});
export const changeRegistrationFieldError = (payload: Types.TPayload) => ({type: AT.CHANGE_REGISTRATION_FIELD_ERROR, payload});
export const sendRegistration = () => ({ type: AT.SEND_REGISTRATION });

import * as AT from "./actionTypes";

export const changeRegistrationField = (payload: any) => ({type: AT.CHANGE_REGISTRATION_FIELD, payload});
export const changeRegistrationFieldError = (payload: any) => ({type: AT.CHANGE_REGISTRATION_FIELD_ERROR, payload});
export const sendRegistration = () => ({ type: AT.SEND_REGISTRATION });

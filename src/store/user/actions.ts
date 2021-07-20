import { SET_USER_NAME, IS_USER_NAME } from './actionTypes';

export const setUserName = (payload: any) => ({type: SET_USER_NAME, payload});
export const isUserName = () => ({type: IS_USER_NAME});
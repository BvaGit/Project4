import { SET_USER_NAME, IS_USER_NAME, GAME_TYPE_CONTAINER } from './actionTypes';

export const setUserName = (payload: string) => ({type: SET_USER_NAME, payload});
export const isUserName = () => ({type: IS_USER_NAME});
export const gameTypeContainer = (payload: string) => ({type: GAME_TYPE_CONTAINER, payload})
import * as AT from './actionTypes';

export const getRooms = (payload: string[]) => ({type: AT.GET_ROOMS, payload});
export const sendGetRooms = () => ({type: AT.SEND_GET_ROOMS});
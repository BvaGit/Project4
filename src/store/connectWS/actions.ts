import * as AT from './actionTypes';

export const getRooms = (payload: string[]) => ({type: AT.GET_ROOMS, payload});
export const connectWS = () => ({type: AT.CONNECT_WS});
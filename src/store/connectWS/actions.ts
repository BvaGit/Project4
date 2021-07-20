import * as AT from './actionTypes';

export const getRooms = (payload: any) => ({type: AT.GET_ROOMS, payload});
export const connectWS = () => ({type: AT.CONNECT_WS});
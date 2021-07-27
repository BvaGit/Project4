import * as AT from './actionTypes';

export const getRooms = (payload: any) => ({type: AT.GET_ROOMS, payload});
export const connectWS = () => ({type: AT.CONNECT_WS});
export const gameType = (payload: string) => ({type: AT.GAME_TYPE, payload});
export const createGame = () => ({type: AT.CREATE_GAME});
export const setIdGAme = (payload: string) => ({type: AT.ID_GAME, payload});
export const subscribeRoom = (payload) => ({type: AT.SUBSCRIBE_ROOM, payload});
export const joinRoom = () => ({type:AT.JOIN_ROOM});
export const setGameTypeRoom = (payload: string) => ({type: AT.SET_GAME_TYPE_ROOM, payload});
export const getStepOrder = () => ({type: AT.GET_STEP_ORDER});
export const setStep = (payload: string) => ({type: AT.SET_STEP, payload});
export const doTicStep = () => ({type: AT.DO_TIC_STEP});

export const stepOrder = (payload: string) => ({type:AT.STEP_ORDER, payload});
export const stepG = (payload: string) => ({type: AT.STEP_G, payload});
export const setLogin = (payload: string) => ({type: AT.LOGIN, payload});
export const setField = (payload: any) => ({type: AT.FIELD, payload});
export const joinRoomBot = () => ({type: AT.JOIN_ROOM_BOT});
export const gameBot = () => ({type: AT.GAME_WITH_BOT});
export const subscribeRoomBot = () => ({type: AT.SUBSCRIBE_ROOM_BOT})
export const botStep = () => ({type: AT.BOT_STEP});
export const doBotStep = (payload: any) => ({type: AT.DO_BOT_STEP, payload});
export const setGameContainer = (payload: string) => ({type: AT.SET_GAME_CONTAINER, payload});
export const setWinner = (payload: string) => ({type: AT.WINNER, payload});
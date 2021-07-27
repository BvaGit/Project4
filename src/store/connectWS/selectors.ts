import { createSelector } from 'reselect';

export const connectWsStore = (state: any) => state.connectWs;

export const getRooms = createSelector(
    connectWsStore,
    (connectWs) => connectWs.rooms
)

export const getRoomsSub = createSelector(
    connectWsStore,
    (connectWs) => connectWs.rooms
)

export const typeGame = createSelector(
    connectWsStore,
    (connectWs) => connectWs.gameType
)

export const getIdGame = createSelector(
    connectWsStore,
    (connectWs) => connectWs.idGame
)

export const getGameTypeRoom = createSelector(
    connectWsStore,
    (connectWs) => connectWs.gameTypeRoom
)

export const getStepTic = createSelector(
    connectWsStore,
    (connectWs) => connectWs.step
)

export const getStepG = createSelector(
    connectWsStore,
    (connectWs) => connectWs.stepG
)

export const getField = createSelector(
    connectWsStore,
    (connectWs) => connectWs.field
)

export const bot = createSelector(
    connectWsStore,
    (connectWs) => connectWs.bot
)

export const getGameTypeContainer = createSelector(
    connectWsStore,
    (connectWs) => connectWs.gameTypeContainer
)


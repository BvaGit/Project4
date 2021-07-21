import { createSelector } from 'reselect';

export const connectWsStore = (state: any) => state.connectWs;

export const getRooms = createSelector(
    connectWsStore,
    (connectWs) => connectWs.rooms
)

export const typeGame = createSelector(
    connectWsStore,
    (connectWs) => connectWs.gameType
)

export const getStep = createSelector(
    connectWsStore,
    (connectWs) => connectWs.step
)

export const getTime = createSelector(
    connectWsStore,
    (connectWs) => connectWs.time
)
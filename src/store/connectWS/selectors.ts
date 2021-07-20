import { createSelector } from 'reselect';

export const connectWsStore = (state: any) => state.connectWs;

export const getRooms = createSelector(
    connectWsStore,
    (connectWs) => connectWs.rooms
)
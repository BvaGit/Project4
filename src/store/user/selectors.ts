import { createSelector } from 'reselect';

export const UserStore = (state: any) => state.user;

export const getUserName = createSelector(
    UserStore,
    (user) => user.userName
)

export const getGameTypeContainer = createSelector(
    UserStore,
    (user) => user.gameTypeContainer
)
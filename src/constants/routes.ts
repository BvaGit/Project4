export const routes = {
    baseUrl: 'http://35.176.167.155:8089/',
    account: {
        registration: 'registration/reg',
        auth: 'authorization/auth',
    },
    statistic: 'statistic/search-by-username'
};

export const routesWs = {
    urlWs: 'ws://35.176.167.155:8082/',
    gameMenu: 'game-menu',
    topic: {
        rooms: '/topic/rooms',
        boot: '/topic/bot/',
    },
    updateRoom: '/radioactive/update-room',
    createRoom: '/radioactive/create-room'
}
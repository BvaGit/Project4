import { combineReducers } from 'redux';
import { registrationReducer } from './registration/reducer';
import { authReducer } from './auth/reducer';
import { roomsReducer } from './rooms/reducer';
import { userReducer } from './user/reducer';
import { statisticReducer } from './statistic/reducer';
import { connectRouter } from 'connected-react-router';

const rootReducer = (history: any) => 
    combineReducers({
        auth: authReducer,
        registration: registrationReducer,
        rooms: roomsReducer,
        user: userReducer,
        statistic: statisticReducer,
        router: connectRouter(history)
});


export default rootReducer;

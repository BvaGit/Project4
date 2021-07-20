import { combineReducers } from 'redux';
import { registrationReducer } from './registration/reducer';
import { authReducer } from './auth/reducer';
import { connectWsReducer } from './connectWS/reducer';
import { userReducer } from './user/reducer';
import { statisticReducer } from './statistic/reducer';
import { connectRouter } from 'connected-react-router';

const rootReducer = (history: any) => 
    combineReducers({
        auth: authReducer,
        registration: registrationReducer,
        connectWs: connectWsReducer,
        user: userReducer,
        statistic: statisticReducer,
        router: connectRouter(history)
});

export default rootReducer;

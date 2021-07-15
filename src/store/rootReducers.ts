import { combineReducers } from "redux";
import { registrationReducer } from './registration/reducer';
import { authReducer } from './auth/reducer';
import { connectRouter } from "connected-react-router";

const rootReducer = (history: any) => 
    combineReducers({
        auth: authReducer,
        registration: registrationReducer,
        router: connectRouter(history)
});


export default rootReducer;

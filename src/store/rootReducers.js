import { combineReducers } from "redux";
import { registrationReducer } from './registration/reducer.js';
import { connectRouter } from "connected-react-router";

const rootReducer = (history) => 
    combineReducers({
        registration: registrationReducer,
        router: connectRouter(history)
});


export default rootReducer;

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createSagaMiddleware from 'redux-saga'
import { BrowserRouter } from 'react-router-dom';
import {ConnectedRouter} from "connected-react-router";
import { createStore, applyMiddleware, compose } from "redux";


import rootReducer from "../src/store/rootReducers";
import App from "./components/App";
import history from '../src/helpers/history'
import { sagaRoot } from './store/sagaRoot';
const sagaMiddleware = createSagaMiddleware();

let devTools = (f) => f;
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  devTools = window.__REDUX_DEVTOOLS_EXTENSION__();
}

const store = createStore(
  rootReducer(history),
  {},
  compose(applyMiddleware(sagaMiddleware), devTools)
);

sagaMiddleware.run(sagaRoot);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

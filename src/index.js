import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import {ConnectedRouter} from "connected-react-router";
import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "../src/store/rootReducers.js";
import App from "./components/App";
import history from '../src/helpers/history'

const store = createStore(
  rootReducer(history),
);

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

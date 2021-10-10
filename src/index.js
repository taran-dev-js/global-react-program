import React from "react";
import {composeWithDevTools} from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import ReactDOM from "react-dom";
import {App} from "./components";
import {rootReducer} from './store/rootReducer'

import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.scss";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root"));
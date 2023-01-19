import {applyMiddleware, createStore} from "redux";
import reducer from "./reducer";

const thunkMiddleware = require('redux-thunk').default;

export const store = createStore(reducer, applyMiddleware(thunkMiddleware));
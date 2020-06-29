import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {createLogger} from "redux-logger";
import rootReduser from "./rootReduser";
import {persistStore} from "redux-persist";

const middlewares = [thunk, createLogger({collapsed:true})];
export const store = createStore(rootReduser, applyMiddleware(...middlewares))

export const persistor = persistStore(store)
import {createStore} from "redux";
import {cashReducer} from "./cashReducer";
import {combineReducers} from "redux";

export const store = createStore(cashReducer)


import { applyMiddleware, createStore } from 'redux';
import { thunk } from 'redux-thunk';

// @ts-ignore
export const store = createStore({}, applyMiddleware(thunk));

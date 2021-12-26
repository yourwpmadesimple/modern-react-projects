import { createStore, combineReducers } from "redux";

const reducers = {}; // This holds all reducers

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);

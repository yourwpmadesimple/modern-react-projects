import { createStore, combineReducers } from "redux";

const reducers = {}; // This holds all reducers

const rootReducer = combineReducers(reducers);

const configureStore = () => createStore(rootReducer);

import { createStore, combineReducers } from "redux";
import { todos } from "./reducers";

const reducers = {
  todos,
}; // This holds all reducers

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);

import {combineReducers, createStore} from "redux";
import timerReducer from "./timerReducer";

let reducersBatch = combineReducers({
    timer: timerReducer,
});

let store = createStore(reducersBatch);

window.store = store;

export default store;
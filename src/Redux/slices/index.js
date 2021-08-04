import { combineReducers } from 'redux';

import authReducer from "./auth";
import playerReducer from "./player";
import historyReducer from "./history";

export * from './auth';
export * from './player';
export * from './history';

const rootReducer = combineReducers({
    auth: authReducer,
    player: playerReducer,
    history: historyReducer,
});

export default rootReducer;
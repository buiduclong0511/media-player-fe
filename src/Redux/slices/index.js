import { combineReducers } from 'redux';

import authReducer from "./auth";
import playerReducer from "./player";
import historyReducer from "./history";
import formLoginReducer from "./formLogin";

export * from './auth';
export * from './player';
export * from './history';
export * from './formLogin';

const rootReducer = combineReducers({
    auth: authReducer,
    player: playerReducer,
    history: historyReducer,
    formLogin: formLoginReducer,
});

export default rootReducer;
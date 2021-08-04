import { combineReducers } from 'redux';

import authReducer from "./auth";
import listPlayingReducer from "./listPlaying";
import historyReducer from "./history";

export * from './auth';
export * from './listPlaying';
export * from './history';

const rootReducer = combineReducers({
    auth: authReducer,
    listPlaying: listPlayingReducer,
    history: historyReducer,
});

export default rootReducer;
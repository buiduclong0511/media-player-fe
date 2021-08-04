import { combineReducers } from 'redux';

import authReducer from "./auth";
import listPlayingReducer from "./listPlaying";

export * from './auth';
export * from './listPlaying';

const rootReducer = combineReducers({
    auth: authReducer,
    listPlaying: listPlayingReducer,
});

export default rootReducer;
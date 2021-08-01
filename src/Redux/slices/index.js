import { combineReducers } from 'redux';

import authReducer from "./auth";
import formReducer from "./form";

export * from './auth';
export * from './form';

const rootReducer = combineReducers({
    auth: authReducer,
    form: formReducer
});

export default rootReducer;
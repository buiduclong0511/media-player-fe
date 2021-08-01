import { combineReducers } from 'redux';

import authReducer from "./auth";
import formReducer from "./form";
import toastReducer from "./toast";

export * from './auth';
export * from './form';
export * from './toast';

const rootReducer = combineReducers({
    auth: authReducer,
    form: formReducer,
    toast: toastReducer,
});

export default rootReducer;
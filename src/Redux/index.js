import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from "redux-thunk";

import rootReducer from './slices';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["auth", "history"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({ 
    reducer: persistedReducer,
    middleware: [thunk]
});

export * from "./slices";

export const persistor = persistStore(store);

export default store;

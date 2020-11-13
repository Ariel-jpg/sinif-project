import { applyMiddleware, createStore } from 'redux';
import storage from "redux-persist/lib/storage";

import rootMiddleware from './Common/RootMiddlewares';
import rootReducer from "./Common/RootReducers";

import { composeWithDevTools } from 'redux-devtools-extension';

import monitorReducersEnhancer from './Enhancers/monitorReducers';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
    key: "root",
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(preloadedState) {
    const middlewareEnhancer = applyMiddleware(...rootMiddleware);

    const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
    const composedEnhancers = composeWithDevTools(...enhancers);

    const store = createStore(persistedReducer, preloadedState, composedEnhancers);
    const persistor = persistStore(store);

    return { store, persistor };
}
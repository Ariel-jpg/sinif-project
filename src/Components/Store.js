import { applyMiddleware, createStore } from 'redux';

import rootMiddleware from './Common/RootMiddlewares';
import rootReducer from "./Common/RootReducers";

import { composeWithDevTools } from 'redux-devtools-extension';

import monitorReducersEnhancer from './enhancers/monitorReducers';

export default function configureStore(preloadedState) {
    const middlewareEnhancer = applyMiddleware(...rootMiddleware);

    const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
    const composedEnhancers = composeWithDevTools(...enhancers);

    const store = createStore(rootReducer, preloadedState, composedEnhancers);

    return store;
}
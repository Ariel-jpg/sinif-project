// All middlewares have to be registered here

import thunkMiddleware from "redux-thunk";
import loggerMiddleware from '../enhancers/logger';

let middlewares = [
    loggerMiddleware,
    thunkMiddleware
];


export default middlewares;
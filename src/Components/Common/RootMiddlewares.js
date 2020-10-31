// All middlewares have to be registered here

import thunkMiddleware from "redux-thunk";
import loggerMiddleware from '../Enhancers/logger';
import sessionMiddleware from "../Session/session.middleware";
import userMiddleware from "../User/user.middleware";

let middlewares = [
    loggerMiddleware,
    thunkMiddleware,
    userMiddleware,
    sessionMiddleware
];


export default middlewares;
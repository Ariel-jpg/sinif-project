
const sessionMiddleware = ({ getState, dispatch }) => next => action => {
    next(action);

    switch (action.type) {
        default:
            break;
    }
}

export default sessionMiddleware;
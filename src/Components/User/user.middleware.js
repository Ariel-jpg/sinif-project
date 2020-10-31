import { CHANGE_THEME_REQUEST } from "./user.actions";

const userMiddleware = ({ getState, dispatch }) => next => action => {
    next(action);

    switch (action.type) {
        case CHANGE_THEME_REQUEST:
            // Need to do
            break;

        default:
            break;
    }
}

export default userMiddleware;
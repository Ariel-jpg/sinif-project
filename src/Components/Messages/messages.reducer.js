import { LOGOUT } from "../Session/session.actions";
import { GET_CLASS_MESSAGES_REQUEST } from "./messages.actions";

const initialState = {
    classMessages: [],
    comments: []
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CLASS_MESSAGES_REQUEST: return { ...state, classMessages: action.res }

        case LOGOUT: return initialState;
        default:
            return state;
    }
}

export default homeReducer;
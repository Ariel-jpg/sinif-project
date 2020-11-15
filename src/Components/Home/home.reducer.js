import { LOGOUT } from "../Session/session.actions";
import { CHANGE_CLASS, LOAD_ALL_CLASS_MESSAGES, GET_USER_LESSONS_RESPONSE, LOAD_NEW_CLASS_MESSAGES } from "./home.actions";

const initialState = {
    classCode: 1,
    totalLength: 0,
    lessons: [],
    messages: [],
    comments: []    
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CLASS: return { ...state, classCode: action.newClassCode }
        case GET_USER_LESSONS_RESPONSE: return { ...state, lessons: action.res.body }
        case LOAD_ALL_CLASS_MESSAGES: return {
            ...state, messages: action.body.messages,
            totalLength: action.body.totalLength
        }
        case LOAD_NEW_CLASS_MESSAGES: return { ...state, messages: [action.message, ...state.messages] }
        case LOAD_NEW_CLASS_MESSAGES: return { ...state, messages: [action.message, ...state.messages] }

        case LOGOUT: return initialState;
        default:
            return state;
    }
}

export default homeReducer;
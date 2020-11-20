import { LOGOUT } from "../Session/session.actions";
import {
    CHANGE_CLASS,
    LOAD_ALL_CLASS_MESSAGES,
    GET_USER_LESSONS_RESPONSE,
    LOAD_NEW_CLASS_MESSAGES,
    LOAD_ALL_COMMENTS,
    LOAD_NEW_COMMENT,
    CHANGE_QUESTION
} from "./home.actions";

const initialState = {
    classCode: 0,
    questionId: undefined,
    totalQuestionsLength: 0,
    totalCommentsLength: 0,
    lessons: [],
    messages: [],
    comments: []
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CLASS: return { ...state, classCode: action.newClassCode, questionId: undefined }
        case CHANGE_QUESTION: return { ...state, questionId: action.newQuestionId }
        case GET_USER_LESSONS_RESPONSE: return { ...state, lessons: action.res.body }
        case LOAD_NEW_CLASS_MESSAGES: return { ...state, messages: [action.message, ...state.messages] }
        case LOAD_NEW_COMMENT: return { ...state, comments: [action.comment, ...state.comments] }

        case LOAD_ALL_CLASS_MESSAGES: return {
            ...state, messages: action.body.messages,
            totalQuestionsLength: action.body.totalLength
        }
        case LOAD_ALL_COMMENTS: return {
            ...state, comments: action.body.comments,
            totalCommentsLength: action.body.totalLength
        }

        case LOGOUT: return initialState;
        default:
            return state;
    }
}

export default homeReducer;
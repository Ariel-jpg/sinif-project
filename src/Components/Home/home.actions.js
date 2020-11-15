export const CHANGE_CLASS = "CHANGE_CLASS";

export const GET_USER_LESSONS_REQUEST = "GET_USER_LESSONS_REQUEST";
export const GET_USER_LESSONS_RESPONSE = "GET_USER_LESSONS_RESPONSE";
export const GET_USER_LESSONS_RESPONSE_ERROR = "GET_USER_LESSONS_RESPONSE_ERROR";

export const LOAD_ALL_CLASS_MESSAGES = "LOAD_ALL_CLASS_MESSAGES";
export const LOAD_NEW_CLASS_MESSAGES = "LOAD_NEW_CLASS_MESSAGES";

export const GET_QUESTION_COMMENTS_REQUEST = "GET_QUESTION_COMMENTS_REQUEST";
export const GET_QUESTION_COMMENTS_RESPONSE = "GET_QUESTION_COMMENTS_RESPONSE";
export const GET_QUESTION_COMMENTS_RESPONSE_ERROR = "GET_QUESTION_COMMENTS_RESPONSE_ERROR";

export const homeActions = {
    changeClass: (newClassCode) => ({ type: CHANGE_CLASS, newClassCode }),

    getUserLessonsRequest: () => ({ type: GET_USER_LESSONS_REQUEST }),
    getUserLessonsResponse: (res) => ({ type: GET_USER_LESSONS_RESPONSE, res }),
    getUserLessonsResponseError: (error) => ({ type: GET_USER_LESSONS_RESPONSE_ERROR, error }),

    loadAllClassMessages: (body) => ({ type: LOAD_ALL_CLASS_MESSAGES, body }),
    loadNewClassMessages: (message) => ({ type: LOAD_NEW_CLASS_MESSAGES, message }),

    getQuestionCommentsRequest: () => ({ type: GET_QUESTION_COMMENTS_REQUEST }),
    getQuestionCommentsResponse: (res) => ({ type: GET_QUESTION_COMMENTS_RESPONSE, res }),
    getQuestionCommentsResponseError: (error) => ({ type: GET_QUESTION_COMMENTS_RESPONSE_ERROR, error }),
}
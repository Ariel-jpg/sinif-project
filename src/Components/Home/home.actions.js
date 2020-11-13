export const CHANGE_CLASS = "CHANGE_CLASS";

export const GET_USER_LESSONS_REQUEST = "GET_USER_LESSONS_REQUEST";
export const GET_USER_LESSONS_RESPONSE = "GET_USER_LESSONS_RESPONSE";
export const GET_USER_LESSONS_RESPONSE_ERROR = "GET_USER_LESSONS_RESPONSE_ERROR";

export const LOAD_ALL_CLASS_MESSAGES = "LOAD_ALL_CLASS_MESSAGES";
export const LOAD_NEW_CLASS_MESSAGES = "LOAD_NEW_CLASS_MESSAGES";

export const homeActions = {
    changeClass: (newClassCode) => ({ type: CHANGE_CLASS, newClassCode }),

    getUserLessonsRequest: () => ({ type: GET_USER_LESSONS_REQUEST }),
    getUserLessonsResponse: (res) => ({ type: GET_USER_LESSONS_RESPONSE, res }),
    getUserLessonsResponseError: (error) => ({ type: GET_USER_LESSONS_RESPONSE_ERROR, error }),

    loadAllClassMessages: (body) => ({ type: LOAD_ALL_CLASS_MESSAGES, body }),
    loadNewClassMessages: (message) => ({ type: LOAD_NEW_CLASS_MESSAGES, message })
}
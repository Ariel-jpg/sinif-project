export const GET_CLASS_MESSAGES_REQUEST = "GET_CLASS_MESSAGES_REQUEST";
export const GET_CLASS_MESSAGES_RESPONSE = "GET_CLASS_MESSAGES_RESPONSE";
export const GET_CLASS_MESSAGES_RESPONSE_ERROR = "GET_CLASS_MESSAGES_RESPONSE_ERROR";

export const messagesActions = {
    getClassMessagesRequest: (classCode) => ({ type: GET_CLASS_MESSAGES_REQUEST, classCode }),
    getClassMessagesResponse: (res) => ({ type: GET_CLASS_MESSAGES_RESPONSE, res }),
    getClassMessagesResponseError: (error) => ({ type: GET_CLASS_MESSAGES_RESPONSE_ERROR, error }),
}
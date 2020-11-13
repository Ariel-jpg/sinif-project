export const CHANGE_COLOR_THEME = "CHANGE_COLOR_THEME";

export const JOIN_CLASS_REQUEST = "JOIN_CLASS_REQUEST";
export const JOIN_CLASS_RESPONSE = "JOIN_CLASS_RESPONSE";
export const JOIN_CLASS_RESPONSE_ERROR = "JOIN_CLASS_RESPONSE_ERROR";

export const userActions = {
    changeTheme: (themeName) => ({ type: CHANGE_COLOR_THEME, themeName }),
    
    joinClassRequest: (classCode) => ({ type: JOIN_CLASS_REQUEST, classCode }),
    joinClassResponse: (res) => ({ type: JOIN_CLASS_RESPONSE, res }),
    joinClassResponseError: (err) => ({ type: JOIN_CLASS_RESPONSE_ERROR, err }),
}
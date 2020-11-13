export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_RESPONSE = "LOGIN_RESPONSE";
export const LOGIN_RESPONSE_ERROR = "LOGIN_RESPONSE_ERROR";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_RESPONSE = "REGISTER_RESPONSE";
export const REGISTER_RESPONSE_ERROR = "REGISTER_RESPONSE_ERROR";

export const LOGOUT = "LOGOUT";

export const sessionActions = {
    loginRequest: (body) => ({ type: LOGIN_REQUEST, body }),
    loginResponse: (res) => ({ type: LOGIN_RESPONSE, res }),
    loginResponseError: (error) => ({ type: LOGIN_RESPONSE_ERROR, error }),

    registerRequest: (body) => ({ type: REGISTER_REQUEST, body }),
    registerResponse: (res) => ({ type: REGISTER_RESPONSE, res }),
    registerResponseError: (error) => ({ type: REGISTER_RESPONSE_ERROR, error }),

    logout: () => ({ type: LOGOUT }),
};
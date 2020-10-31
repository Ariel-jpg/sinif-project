export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_RESPONSE = "LOGIN_RESPONSE";
export const LOGIN_RESPONSE_ERROR = "LOGIN_RESPONSE_ERROR";

export const sessionActions = {
    loginRequest: (dni, password) => ({ type: LOGIN_REQUEST, dni, password }),
    loginResponse: (res) => ({ type: LOGIN_REQUEST, res }),
    loginResponseError: (error) => ({ type: LOGIN_REQUEST, error }),

}
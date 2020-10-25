export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_RESPONSE = "LOGIN_RESPONSE";
export const LOGIN_RESPONSE_ERROR = "LOGIN_RESPONSE_ERROR";

export default {
    loginRequest: (dni, password) => ({LOGIN_REQUEST, dni, password}),
    loginResponse: (res) => ({LOGIN_REQUEST, res}),
    loginResponseError: (error) => ({LOGIN_REQUEST, error})
}
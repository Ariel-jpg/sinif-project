import {
    LOGIN_REQUEST,
    LOGIN_RESPONSE,
    LOGIN_RESPONSE_ERROR,
    LOGOUT,
    REGISTER_REQUEST,
    REGISTER_RESPONSE,
    REGISTER_RESPONSE_ERROR
} from "./session.actions";

const initialState = {
    ui: {
        loginError: false,
        loginPending: false,
        registryError: false,
        registryPending: false
    }
}

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { ...state, ui: { ...state.ui, loginError: false, loginPending: true } };
        case LOGIN_RESPONSE:
            return { ...state, ui: { ...state.ui, loginPending: false } };
        case LOGIN_RESPONSE_ERROR:
            return { ...state, ui: { ...state.ui, loginError: true, loginPending: false } };
        case REGISTER_REQUEST:
            return { ...state, ui: { ...state.ui, registryError: false, registryPending: true } };
        case REGISTER_RESPONSE:
            return { ...state, ui: { ...state.ui, registryPending: false } };
        case REGISTER_RESPONSE_ERROR:
            return { ...state, ui: { ...state.ui, registryError: true, registryPending: false } };

        case LOGOUT: return initialState;
        default: return state;
    }
}
export default sessionReducer;
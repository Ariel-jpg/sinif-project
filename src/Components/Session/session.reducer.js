import { LOGIN_REQUEST, LOGIN_RESPONSE, LOGIN_RESPONSE_ERROR } from "./session.actions";

const initalState = {
    isLogged: localStorage.getItem("isLogged") || false,
    ui: {
        loginError: false,
        registryError: false
    }
}

const sessionReducer = (state = initalState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { ...state };
        case LOGIN_RESPONSE:
            return { ...state, isLogged: true };
        case LOGIN_RESPONSE_ERROR:
            return { ...state, ui: { ...state.ui, registryError: true } };

        default: return state;
    }
}
export default sessionReducer;
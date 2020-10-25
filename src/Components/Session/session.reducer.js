const { LOGIN_REQUEST, LOGIN_RESPONSE, LOGIN_RESPONSE_ERROR } = require("./session.actions")

const initalState = {
    user: undefined
}

const sessionReducer = (state = initalState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { ...state, };
        case LOGIN_RESPONSE:
            return { ...state, };
        case LOGIN_RESPONSE_ERROR:
            return { ...state, };

        default: return state;
    }
}
export default sessionReducer;
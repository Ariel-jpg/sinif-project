import { CHANGE_COLOR_THEME } from "./user.actions";
import { getLocalStorage } from "../utils/functions";
import { LOGIN_RESPONSE, LOGOUT } from "../Session/session.actions";

const initialState = {
    isLogged: false,
    user: {
        _id: "44097455",
        userSettings: {
            colorTheme: "secondTheme"
        }
    }
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_RESPONSE: return { ...state, isLogged: true, user: { ...state.user, _id: action.res._id } }
        case CHANGE_COLOR_THEME: return { ...state, user: { ...state.user, userSettings: { ...state.user.userSettings, colorTheme: action.themeName } } }

        case LOGOUT: return initialState;
        default: return state;
    }
}
export default userReducer;
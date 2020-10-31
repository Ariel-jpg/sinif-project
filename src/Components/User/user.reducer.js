import { CHANGE_THEME_REQUEST } from "./user.actions";
import { getLocalStorage } from "../utils/functions";

const initalState = {
    colorTheme: getLocalStorage("userThemeName") || "darkTheme"
}

const userReducer = (state = initalState, action) => {
    switch (action.type) {
        case CHANGE_THEME_REQUEST: return { ...state, colorTheme: action.themeName }
        default: return state;
    }
}
export default userReducer;
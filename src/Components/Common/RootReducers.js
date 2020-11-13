import { combineReducers } from "redux";
import sessionReducer from "../Session/session.reducer";
import userReducer from "../User/user.reducer";
import homeReducer from "../Home/home.reducer";

export default combineReducers({
    sessionReducer,
    userReducer,
    homeReducer
});
import { combineReducers } from "redux";
import sessionReducer from "../Session/session.reducer";
import userReducer from "../User/user.reducer";

export default combineReducers({
    sessionReducer,
    userReducer
});
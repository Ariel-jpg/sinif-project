// All "actionsCreators" or plain actions have to be registered here
import { sessionActions } from "../Session/session.actions";
import { userActions } from "../User/user.actions";
import { homeActions } from "../Home/home.actions";

const rootActions = {
    sessionActions,
    userActions,
    homeActions
};

export default rootActions;
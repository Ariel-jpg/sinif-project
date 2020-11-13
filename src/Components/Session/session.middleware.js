import { LOGIN_REQUEST, REGISTER_REQUEST, sessionActions } from "./session.actions";
import { sessionServices } from "./session.services";
import { toastError, toastSuccess } from "../utils/functions";
import { homeActions } from "../Home/home.actions";
const sessionMiddleware = ({ getState, dispatch }) => next => action => {
    next(action);

    switch (action.type) {
        case LOGIN_REQUEST:
            sessionServices.login(action.body)
                .then(res => {
                    if (res.status === 200) {
                        dispatch(sessionActions.loginResponse(res.body));
                        dispatch(homeActions.getUserLessonsRequest());

                        // Next actions for get data

                    } else {
                        dispatch(sessionActions.loginResponseError(res));
                        toastError(res.errorMessage);
                    }
                })
                .catch(err => {
                    toastError("Ocurrió un error al intentar hacer el inicio de sesión.");
                    dispatch(sessionActions.loginResponseError(err));
                })
            break;
        case REGISTER_REQUEST:
            sessionServices.register(action.body)
                .then(res => {
                    if (res.status === 400) { toastError(res.errorMessage); dispatch(sessionActions.registerResponseError(res.errorMessage)); }
                    else if (res.status === 200) {
                        toastSuccess("Registro exitoso");
                        dispatch(sessionActions.loginRequest(res.body))
                    };
                })
                .catch(err => {
                    toastError("Ocurrió un error al intentar hacer el registro");
                    dispatch(sessionActions.registerResponseError(err))
                })
            break;
        default: break;
    }
}

export default sessionMiddleware;
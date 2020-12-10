import { JOIN_CLASS_REQUEST, userActions } from "./user.actions";
import { userServices } from "./user.services";
import { homeActions } from "../Home/home.actions";
import { toastError } from "../utils/functions";

const userMiddleware = ({ getState, dispatch }) => next => action => {
    next(action);

    switch (action.type) {
        case JOIN_CLASS_REQUEST:
            !(getState().homeReducer.lessons.find(_class => _class._id === action.classCode)) ? userServices.joinClass({
                classCode: action.classCode,
                userId: getState().userReducer.user._id
            })
                .then(res => {
                    if (res.status === 200) {
                        dispatch(homeActions.getUserLessonsRequest());
                        dispatch(userActions.joinClassResponse(res));
                    } else {
                        toastError(res.errorMessage);
                        dispatch(userActions.joinClassResponseError(res));
                    }
                })
                .catch(err => {
                    toastError("Ocurrió un error inesperado. Intentelo de nuevo.")
                    dispatch(userActions.joinClassResponseError(err));
                })
                : toastError("Ya estás en la clase ingresada.");
            break;
        default:
            break;
    }
}

export default userMiddleware;
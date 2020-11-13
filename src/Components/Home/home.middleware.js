import { GET_USER_LESSONS_REQUEST, homeActions } from "./home.actions";
import { homeServices } from "./home.services";
import { toastError } from "../utils/functions";

const homeMiddleware = ({ getState, dispatch }) => next => action => {
    next(action);

    switch (action.type) {
        case GET_USER_LESSONS_REQUEST:
            homeServices.getUserLessons({ _id: getState().userReducer.user._id })
                .then(res => dispatch(homeActions.getUserLessonsResponse(res)))
                .catch(err => {
                    dispatch(homeActions.getUserLessonsResponseError(err));
                    toastError("Ocurrió un error al intentar obtener las sus clases. Intentelo de nuevo.");
                })
            break;
        default:
            break;
    }
}

export default homeMiddleware;
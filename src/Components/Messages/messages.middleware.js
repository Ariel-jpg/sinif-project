import { GET_CLASS_MESSAGES_REQUEST, messagesActions } from "./messages.actions";
import { messagesServices } from "./messages.services";
import { toastError } from "../utils/functions";

const homeMiddleware = ({ getState, dispatch }) => next => action => {
    next(action);

    switch (action.type) {
        case GET_CLASS_MESSAGES_REQUEST:
            messagesServices.getClassMessages(action.classCode)
                .then(res => {
                    dispatch(messagesActions.getClassMessagesResponse(res));
                })
                .catch(err => {
                    dispatch(messagesActions.getClassMessagesResponseError(err));
                    toastError("Ocurrió un error al intentar obtener los mensajes. Por favor intentelo de nuevo.")
                })
            break;
        default:
            break;
    }
}

export default homeMiddleware;
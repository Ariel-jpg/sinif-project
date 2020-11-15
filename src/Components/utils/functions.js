import { useEffect } from "react";
import io from "socket.io-client";
import { toast } from "react-toastify";

export const setLocalStorage = (itemKey, itemValue) => localStorage.setItem(itemKey, itemValue);
export const getLocalStorage = (itemKey) => localStorage.getItem(itemKey);
export const fieldValidation = (body) => body.trim() !== "";
export const toastError = (message, duration = 3000) => toast.error(message, {
    position: "bottom-right",
    autoClose: duration,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
});
export const toastSuccess = (message, duration = 4000) => toast.success(message, {
    position: "bottom-right",
    autoClose: duration,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
});
export const toastDefault = (message, duration = 4000) => toast.dark(message, {
    position: "bottom-right",
    autoClose: duration,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
});
export const SocketListener = (classCode,
    onEvent,
    getDataEvent,
    query,
    setMessages,
    loadAllClassMessages,
    loadNewClassMessages,
    socketComponentRef
) => {
    useEffect(() => {
        socketComponentRef.current = io('http://192.168.0.10:302/', { query });

        // Listener
        socketComponentRef.current.on(onEvent, message => {
            toastError("Se recibió: ", message);

            const incomingMessage = {
                title: message.body.title,
                description: message.body.description,
                classCode: message.body.classCode
            };

            loadNewClassMessages(incomingMessage);
        });

        socketComponentRef.current.emit(getDataEvent, { body: { length: 0 } });
        socketComponentRef.current.on(getDataEvent, data => {
            loadAllClassMessages(data);
        });

        return () => { socketComponentRef.current.disconnect(); };
    }, [classCode]);
}
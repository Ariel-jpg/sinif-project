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
export const SocketListener = (
    roomId,
    onEvent,
    getDataEvent,
    query,
    loadAllDataMessages,
    loadNewData,
    socketComponentRef
) => {
    useEffect(() => {
        console.log("CAMBIÓ:")
        socketComponentRef.current = io('http://192.168.0.11:302/', { query });

        // Listener
        socketComponentRef.current.on(onEvent, message => {
            toastError("Se recibió: ", message);
            loadNewData(message.body);
        });

        socketComponentRef.current.emit(getDataEvent, { body: { length: 0 } });
        socketComponentRef.current.on(getDataEvent, data => loadAllDataMessages(data));

        return () => { socketComponentRef.current.disconnect(); };
    }, [roomId]);
}
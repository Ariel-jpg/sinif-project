import React, { useRef, useState } from 'react';
import Media from "react-media";

import { SinifDialogComponent } from '../../Common/Components/SinifDialogComponent';

import Themes from "../../Constants/Themes";

import { SocketListener, toastError } from "../../utils/functions";

import "./Styles/HomeScreenWrapperStyle.css";
import { GET_MESSAGES, NEW_CLASS_MESSAGE_EVENT } from '../../Constants/Constants';
import Home from '../Containers/Home';
import HomeResponsiveComponent from '../Containers/HomeResponsive';

const HomeScreenWrapper = (props) => {
    const cssVars = {
        "--primary-color": Themes[props.colorPage].primaryColor,
        "--secondary-color": Themes[props.colorPage].secondaryColor,
        "--tertiary-color": Themes[props.colorPage].tertiaryColor
    };

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [joinClassCode, setJoinClassCode] = useState("");
    const [joinClassDialog, setJoinClassDialog] = useState(false);
    const socketClassMessagesRef = useRef();

    SocketListener(props.classCode,
        NEW_CLASS_MESSAGE_EVENT,
        GET_MESSAGES,
        { classCode: props.classCode },
        props.loadAllClassMessages,
        props.loadNewClassMessages,
        socketClassMessagesRef,
    );

    const onSend = (e, _title, _description) => {
        e.preventDefault();

        if (_title.trim() !== "") {
            toastError("Se envío");

            socketClassMessagesRef.current.emit(NEW_CLASS_MESSAGE_EVENT, {
                body: {
                    classCode: props.classCode,
                    title: _title,
                    description: _description
                },
                senderId: socketClassMessagesRef.current.id
            });

            setTitle("");
            setDescription("");
        } else toastError("El primer campo es obligatorio.", 2000)
    };

    return <main className="HomeScreenWrapperStyle" style={cssVars}>
        <Media query="(min-width: 800px)" render={() => <Home
            handleLoadMessages={() => socketClassMessagesRef.current.emit(GET_MESSAGES, { body: { length: props.messages.length } })}
            onSend={onSend}
            setJoinClassDialog={() => setJoinClassDialog(true)}
            setDescription={setDescription}
            setTitle={setTitle}
            title={title}
            description={description}
        />}
        />

        <Media query="(max-width: 799px)" render={() => <HomeResponsiveComponent
            handleLoadMessages={() => socketClassMessagesRef.current.emit(GET_MESSAGES, { body: { length: props.messages.length } })}
            onSend={onSend}
            setJoinClassDialog={() => setJoinClassDialog(true)}
            setDescription={setDescription}
            setTitle={setTitle}
            title={title}
            description={description}
        />}
        />


        <SinifDialogComponent
            backgroundColor={Themes[props.colorPage].tertiaryColor}
            color={Themes[props.colorPage].primaryColor}
            handleChange={e => setJoinClassCode(e.target.value)}
            handleClose={() => setJoinClassDialog(false)}
            handleConfirm={() => {
                joinClassCode.trim() === "" ? toastError("Debe ingresar el código de la clase")
                    : props.joinClass(joinClassCode);
            }}
            title="Unirse a una clase"
            open={joinClassDialog}
        />
    </main>
}

export default HomeScreenWrapper;
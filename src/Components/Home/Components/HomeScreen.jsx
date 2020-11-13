import React, { useEffect, useRef, useState } from 'react';
import io from "socket.io-client";
import { AddClassButton, SinifClassMessageComponent, SinifSubjectComponent } from "../../Common/Components/HomeComponents"
import { toastError } from "../../utils/functions";
import Themes from "../../Constants/Themes";
import { post } from '../../utils/http';
import "./Styles/HomeScreenStyle.css";
import { BiBookBookmark } from 'react-icons/bi';
import { AiOutlineSetting } from 'react-icons/ai';
import { RiPlayListAddFill } from 'react-icons/ri';
import { BsQuestion, BsFillTriangleFill } from 'react-icons/bs';
import Dodecahedron from "../../Common/Animations/Dodecahedron";

import { homeServices } from "../home.services";
import { SinifDialogComponent } from '../../Common/Components/SinifDialogComponent';

const NEW_CLASS_MESSAGE_EVENT = "NEW_CLASS_MESSAGE_EVENT";
const GET_MESSAGES = "GET_MESSAGES";

function Listener(classCode, setMessages, loadAllClassMessages, loadNewClassMessages, socketRef) {
    useEffect(() => {
        socketRef.current = io('http://192.168.0.10:302/', { query: { classCode: classCode } });

        // Listener
        socketRef.current.on(NEW_CLASS_MESSAGE_EVENT, message => {
            toastError("Se recibió: ", message);

            const incomingMessage = {
                title: message.body.title,
                description: message.body.description,
                classCode: message.body.classCode
            };

            loadNewClassMessages(incomingMessage);
        });

        socketRef.current.emit(GET_MESSAGES, { body: { length: 0 } });
        socketRef.current.on(GET_MESSAGES, data => {
            loadAllClassMessages(data);
        });

        return () => { socketRef.current.disconnect(); };
    }, [classCode]);
}

const HomeScreen = (props) => {
    const cssVars = {
        "--primary-color": Themes[props.colorPage].primaryColor,
        "--secondary-color": Themes[props.colorPage].secondaryColor,
        "--tertiary-color": Themes[props.colorPage].tertiaryColor
    };

    const [messages, setMessages] = useState([]);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [joinClassCode, setJoinClassCode] = useState("");
    const [joinClassDialog, setJoinClassDialog] = useState(false);
    const socketRef = useRef();

    Listener(props.classCode, setMessages, props.loadAllClassMessages, props.loadNewClassMessages, socketRef);

    const onSend = (e, _title, _description) => {
        e.preventDefault();

        if (_title.trim() !== "") {
            toastError("Se envío");

            socketRef.current.emit(NEW_CLASS_MESSAGE_EVENT, {
                body: {
                    classCode: props.classCode,
                    title: _title,
                    description: _description
                },
                senderId: socketRef.current.id
            });

            setTitle("");
            setDescription("");
        } else toastError("El primer campo es obligatorio.", 2000)
    }

    const onChangeRoom = (classCode) => {
        socketRef.current.disconnect();
        props.changeClass(classCode);
    }


    return <main className="HomeScreenStyle" style={cssVars}>
        <nav>
            <ul>
                <h1> <BiBookBookmark /> Clases </h1>
                {
                    props.lessons[0] ? props.lessons.map(_class => <SinifSubjectComponent
                        _class={_class}
                        onClick={() => onChangeRoom(_class._id)}
                        currentClassCode={props.classCode} />
                    ) : <aside>
                            ¿Tenés un código? <br />
                            Proba uniendote a una clase con el botón que tiene el ícono <br />
                            <RiPlayListAddFill />
                        </aside>
                }
            </ul>
            <article>
                <AddClassButton onClick={() => setJoinClassDialog(true)} />
                <div>
                    <button className="HomeButtonStyle">
                        <AiOutlineSetting />
                    </button>
                    <button className="HomeButtonStyle">
                        <BsQuestion />
                    </button>
                </div>
            </article>
        </nav>
        <section>
            <section className="ClassMessagesSectionStyle">
                <form onSubmit={(e) => onSend(e, title, description)}>
                    <dl>
                        <input
                            value={title}
                            onChange={text => setTitle(text.target.value)}
                            placeholder="Tu pregunta" />
                        <input
                            value={description}
                            onChange={text => setDescription(text.target.value)}
                            placeholder="Descripción (opcional)" />
                    </dl>
                    <button type="submit"> <BsFillTriangleFill /> </button>
                </form>
                {
                    props.messages[0] ? props.messages.map((message, i) => {
                        if (i === props.messages.length - 1 && props.messages.length < props.totalLength) return <>
                            <SinifClassMessageComponent message={message} />
                            <button
                                onClick={() => socketRef.current.emit(GET_MESSAGES, { body: { length: props.messages.length } })}>
                                Cargar más preguntas
                            </button>
                        </>

                        return <SinifClassMessageComponent message={message} />
                    })
                        : <aside>
                            <span>
                                Vaya, parece que nadie preguntó aún. <br />
                                Te dejamos esta animación hasta que alguien tenga alguna duda.
                           </span>
                            <Dodecahedron />
                        </aside>
                }
            </section>
            <section>Comments</section>
            <section>Others</section>
        </section>
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

export default HomeScreen;

import React, { useState } from 'react';

import { BsFillTriangleFill } from 'react-icons/bs';

import { LoadMessages, SinifCommentMessageComponent } from '../../Common/Components/HomeComponents';

import { SocketListener, toastError } from '../../utils/functions';

import "./Styles/CommentsSectionScreenStyle.css";

const GET_COMMENTS = "GET_COMMENTS";
const NEW_COMMENT_EVENT = "NEW_COMMENT_EVENT";

const CommentsSectionScreen = (props) => {
    const [comment, setComment] = useState("");

    SocketListener(props.questionId,
        NEW_COMMENT_EVENT,
        GET_COMMENTS,
        { questionId: props.questionId },
        props.loadAllComments,
        props.loadNewComment,
        props.socketCommentsRef
    );

    const onSendComment = (e, _comment) => {
        e.preventDefault();

        if (_comment.trim() !== "") {
            props.socketCommentsRef.current.emit(NEW_COMMENT_EVENT, {
                body: {
                    message: _comment,
                    questionId: props.questionId
                }
            });
            setComment("");
        } else toastError("Debe comentar algo.");
    }

    return <section className="CommentsSectionScreenStyle"> {
        props.responsiveView ? props.questionId ? props.comments[0] ? props.comments.map(({ message }, i) => {
            if (i === props.comments.length - 1 && props.comments.length < props.totalLength) return <>
                <SinifCommentMessageComponent comment={message} />
                <LoadMessages
                    onClick={() => props.socketCommentsRef.current.emit(GET_COMMENTS, { body: { length: props.comments.length } })}
                    label="Cargar más comentarios" />
            </>

            return <SinifCommentMessageComponent comment={message} />
        })
            : <aside>
                Esta pregunta aún no tiene respuesta. <br />
                ¿Vos las tenés? ¡Compartila cuanto antes!
            </aside>
            : <aside> No hay nada por aquí. </aside>
            : <>
                <h4>Comentarios</h4>
                <article>
                    <form onSubmit={e => onSendComment(e, comment)}>
                        <input
                            value={comment}
                            onChange={text => setComment(text.target.value)}
                            placeholder="Tipea tu respuesta " />
                        <button type="submit"> <BsFillTriangleFill /> </button>
                    </form>
                    {
                        props.questionId ?
                            props.comments[0] ? props.comments.map(({ message }, i) => {
                                if (i === props.comments.length - 1 && props.comments.length < props.totalLength) return <>
                                    <SinifCommentMessageComponent comment={message} />
                                    <LoadMessages
                                        onClick={() => props.socketCommentsRef.current.emit(GET_COMMENTS, { body: { length: props.comments.length } })}
                                        label="Cargar más comentarios" />
                                </>

                                return <SinifCommentMessageComponent comment={message} />
                            })
                                : <aside>
                                    Esta pregunta aún no tiene respuesta. <br />
                                    ¿Vos las tenés? ¡Compartila cuanto antes!
                            </aside>
                            : <aside> No hay nada por aquí. </aside>
                    }
                </article>
            </>
    }
    </section>
}


export default CommentsSectionScreen;
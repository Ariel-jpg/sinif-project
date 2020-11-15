import React, { useRef, useState } from 'react';
import { BsFillTriangleFill } from 'react-icons/bs';
import io from 'socket.io-client';
import { LoadMessages, SinifCommentMessageComponent } from '../../Common/Components/HomeComponents';
import { SocketListener, toastError } from '../../utils/functions';
import "./Styles/CommentsSectionScreenStyle.css";

const GET_COMMENTS = "GET_COMMENTS";
const NEW_COMMENT_EVENT = "NEW_COMMENT_EVENT";

const CommentsSectionScreen = (props) => {
    const [comment, setComment] = useState("");
    const socketCommentsRef = useRef();

    socketCommentsRef.current = io('http://192.168.0.10:302/', { query: { questionCode: 1 } });
    socketCommentsRef.current.emit(GET_COMMENTS, { body: "a chikita" })
    socketCommentsRef.current.on(GET_COMMENTS, data => {
        toastError(data);
        console.log("1", data)
    })

    // SocketListener(props.classCode, )

    return <section className="CommentsSectionScreenStyle">
        <h4>Comentarios</h4>
        <article>
            <form>
                <input
                    value={comment}
                    onChange={text => setComment(text.target.value)}
                    placeholder="Tu pregunta" />
                <button type="submit"> <BsFillTriangleFill /> </button>
            </form>
            {
                props.comments.map(comment => <SinifCommentMessageComponent comment={comment} />)
            }
            <LoadMessages label="Cargar más comentarios" />
        </article>
    </section>
}

export default CommentsSectionScreen;
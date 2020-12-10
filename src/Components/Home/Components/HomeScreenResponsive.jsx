import React, { useState } from 'react';
import { AddButton, SinifClassComponent } from '../../Common/Components/HomeComponents';
import { RiAddLine, RiPlayListAddFill } from 'react-icons/ri';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiBookBookmark } from 'react-icons/bi';

import QuestionRenderComponent from '../../Common/Components/QuestionsRenderView';
import ConfigurationSection from '../../Common/Containers/ConfigurationSection';
import CommentSection from '../Containers/CommentSection';
import { SinifSendDialogComponent } from '../../Common/Components/SinifDialogComponent';

import { TextField } from '@material-ui/core';
import { toastError } from '../../utils/functions';

import './Styles/HomeScreenResponsiveStyle.css';

const RenderViews = ({
    section,
    messages,
    classCode,
    handleLoadMessages,
    lessons,
    handleClickQuestion,
    questionId,
    totalQuestionsLength
}) => {
    if (section !== 2)
        return <section className="ViewRender ClassMessagesResponsiveSectionStyle">
            <span>
                <BiBookBookmark />
                {lessons.find(_class => _class._id === classCode)?.className || "No hay materia seleccionada"}
            </span>
            <QuestionRenderComponent
                totalLength={totalQuestionsLength}
                handleChangeQuestion={handleClickQuestion}
                handleLoadMessages={handleLoadMessages}
                questionId={questionId}
                messages={messages}
                classCode={classCode}
            />
        </section>

    else return <section
        className="ViewRender"
        style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
        <ConfigurationSection responsiveView />
    </section>
}

const HomeScreenResponsive = (props) => {
    const [section, setsection] = useState(0);
    const [addClassMessageTitle, setAddClassMessageTitle] = useState("");
    const [addClassMessageDescription, setAddClassMessageDescription] = useState("");
    const [addComment, setAddComment] = useState("");
    const [addClassMessageDialog, setAddClassMessageDialog] = useState(false);

    const handleClickQuestion = (questionId) => {
        props.changeQuestion(questionId);
        setsection(4);
    }
    console.log(section)

    const handleSendClassMessage = () => {
        props.onSend(undefined, addClassMessageTitle, addClassMessageDescription);

        setAddClassMessageTitle("");
        setAddClassMessageDescription("");
    };

    const onSendComment = () => {
        if (addComment.trim() !== "") {
            props.socketCommentsRef.current.emit('NEW_COMMENT_EVENT', {
                body: {
                    message: addComment,
                    questionId: props.questionId
                }
            });
            setAddComment("");
        } else toastError("Debe comentar algo.");
    }

    return <section style={{ minHeight: window.screen.height * 0.8 }} className="MainResponsiveView">
        <RenderViews
            section={section}
            setsection={setsection}
            messages={props.messages}
            classCode={props.classCode}
            handleLoadMessages={props.handleLoadMessages}
            lessons={props.lessons}
            questionId={props.questionId}
            totalQuestionsLength={props.totalQuestionsLength}
            handleClickQuestion={handleClickQuestion}
        />
        <aside style={{ flex: section === 3 || section === 4 ? .9 : .1 }} >
            <span onClick={() => setsection(section !== 0 ? 0 : 3)} />
            <div>
                {
                    section === 4 ?
                        <article>
                            <CommentSection responsiveView socketCommentsRef={props.socketCommentsRef} />
                        </article>
                        : section === 3 ? <article>
                            <h1> <BiBookBookmark /> Clases </h1>
                            {
                                props.lessons[0] ? props.lessons.map(_class => <SinifClassComponent
                                    _class={_class}
                                    onClick={() => { setsection(0); props.changeClass(_class._id) }}
                                    currentClassCode={props.classCode} />
                                ) : <aside>
                                        ¿Tenés un código? <br />
                                        Proba uniendote a una clase con el botón que tiene el ícono: <br />
                                        <RiPlayListAddFill />
                                    </aside>
                            }
                        </article> : <>
                                <BiBookBookmark
                                    onClick={() => { setsection(0) }}
                                    style={section === 0 && { backgroundColor: "var(--tertiary-color)" }} />
                                <RiPlayListAddFill onClick={props.setJoinClassDialog} />
                                {/* <BsQuestion
                                    onClick={() => { setsection(1) }}
                                    style={section === 1 && { backgroundColor: "var(--tertiary-color)" }} /> */}
                                <AiOutlineSetting
                                    onClick={() => { setsection(2) }}
                                    style={section === 2 && { backgroundColor: "var(--tertiary-color)" }} />
                            </>
                }
            </div>
        </aside>


        {(section === 4 || section === 3 || section === 0) &&
            <AddButton
                icon={() => <RiAddLine />}
                onClick={() => setAddClassMessageDialog(true)}
                style={{ ...styles.addButtonStyle, bottom: section === 4 ? "5%" : "15%" }}
            />
        }

        <SinifSendDialogComponent open={addClassMessageDialog}
            handleClose={() => setAddClassMessageDialog(false)}
            title={section === 4 ? "Hacer un comentario" : "Hacer una pregunta"}
            handleConfirm={section === 4 ? onSendComment : handleSendClassMessage}
            component={section === 4 ? <TextField
                autoFocus
                value={addComment}
                onChange={text => setAddComment(text.target.value)}
                margin="dense"
                label="Comentario"
                type="filled"
                fullWidth
            /> : <>
                    <TextField
                        autoFocus
                        value={addClassMessageTitle}
                        onChange={text => setAddClassMessageTitle(text.target.value)}
                        margin="dense"
                        label="Tu pregunta"
                        type="filled"
                        fullWidth
                    />
                    <TextField
                        value={addClassMessageDescription}
                        onChange={text => setAddClassMessageDescription(text.target.value)}
                        margin="dense"
                        label="Descripción (opcional)"
                        type="filled"
                        fullWidth
                    />
                </>
            }
        />
    </section>
}

const styles = {
    addButtonStyle: {
        position: "absolute",
        width: "4rem",
        height: "4rem",
        right: "5%"
    },
}


export default HomeScreenResponsive;
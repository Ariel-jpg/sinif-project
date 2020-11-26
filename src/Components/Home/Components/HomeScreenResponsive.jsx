import React from 'react';
import { useState } from 'react';
import { BiBookBookmark } from 'react-icons/bi';
import { SinifClassComponent } from '../../Common/Components/HomeComponents';
import './Styles/HomeScreenResponsiveStyle.css';
import { AiOutlineSetting } from 'react-icons/ai';
import { BsQuestion } from 'react-icons/bs';
import { RiPlayListAddFill } from 'react-icons/ri';
import CommentSection from '../Containers/CommentSection';
import QuestionRenderComponent from '../../Common/Components/QuestionsRenderView';

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
    switch (section) {
        case 0:
        case 3:
        case 4:
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
        case 1:
        case 2: return <section className="ViewRender"></section>

        default: return <section className="ViewRender" style={{ flex: .1 }} />
    }
}

const HomeScreenResponsive = (props) => {
    const [section, setsection] = useState(0);

    const handleClickQuestion = (questionId) => {
        props.changeQuestion(questionId);
        setsection(4);
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
                            <CommentSection responsiveView />
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
                                <BsQuestion
                                    onClick={() => { setsection(1) }}
                                    style={section === 1 && { backgroundColor: "var(--tertiary-color)" }} />
                                <AiOutlineSetting
                                    onClick={() => { setsection(2) }}
                                    style={section === 2 && { backgroundColor: "var(--tertiary-color)" }} />
                            </>
                }
            </div>
        </aside>
    </section>
}


export default HomeScreenResponsive;
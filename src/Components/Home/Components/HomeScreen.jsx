import React, { useState } from 'react';

import { AddButton as AddClassButton, SinifClassComponent } from '../../Common/Components/HomeComponents';
import { BsFillTriangleFill } from 'react-icons/bs';
import { RiPlayListAddFill } from 'react-icons/ri';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiBookBookmark } from 'react-icons/bi';

import QuestionRenderComponent from '../../Common/Components/QuestionsRenderView';
import SettingsSection from '../../Common/Containers/ConfigurationSection';
import CommentSection from "../Containers/CommentSection";

import './Styles/HomeScreenStyle.css';

const HomeScreen = (props) => {
    const [settings, setSettings] = useState(false);

    return <>
        <nav>
            <ul>
                <h1> <BiBookBookmark /> Clases </h1>
                {
                    props.lessons[0] ? props.lessons.map(_class => <SinifClassComponent
                        _class={_class}
                        onClick={() => props.changeClass(_class._id)}
                        currentClassCode={props.classCode} />
                    ) : <aside>
                            ¿Tenés un código? <br />
                        Proba uniendote a una clase con el botón que tiene el ícono: <br />
                            <RiPlayListAddFill />
                        </aside>
                }
            </ul>
            <article style={{ flex: settings && 1 }}>
                {
                    settings ? <div style={{
                        display: "flex",
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        flexDirection: "column",
                        position: "relative"
                    }}>
                        <span style={{
                            position: "absolute",
                            top: "0%",
                            right: "10%",
                            color: "var(--primary-color)",
                            fontSize: "1.5rem",
                            cursor: "pointer"
                        }}
                            onClick={() => setSettings(false)}
                            children="x"
                        />
                        <h2 children="Cambiar de tema"
                            style={{
                                fontSize: "1.1rem",
                                color: "var(--primary-color)",
                                fontWeight: "lighter"
                            }}
                        />
                        <SettingsSection />
                    </div>
                        : <>
                            <AddClassButton onClick={props.setJoinClassDialog} />
                            <button className="HomeButtonStyle" onClick={() => setSettings(!settings)}>
                                <AiOutlineSetting />
                            </button>
                        </>
                }
            </article>
        </nav>
        <section>
            <section className="ClassMessagesSectionStyle">
                <form onSubmit={(e) => props.onSend(e, props.title, props.description)}>
                    <dl>
                        <input
                            value={props.title}
                            onChange={text => props.setTitle(text.target.value)}
                            placeholder="Tu pregunta" />
                        <input
                            value={props.description}
                            onChange={text => props.setDescription(text.target.value)}
                            placeholder="Descripción (opcional)" />
                    </dl>
                    <button type="submit"> <BsFillTriangleFill /> </button>
                </form>
                <QuestionRenderComponent
                    totalLength={props.totalQuestionsLength}
                    handleChangeQuestion={props.changeQuestion}
                    handleLoadMessages={props.handleLoadMessages}
                    questionId={props.questionId}
                    messages={props.messages}
                    classCode={props.classCode}
                    renderAnimation
                />
            </section>
            <CommentSection socketCommentsRef={props.socketCommentsRef} />
        </section>
    </>
}

export default HomeScreen;
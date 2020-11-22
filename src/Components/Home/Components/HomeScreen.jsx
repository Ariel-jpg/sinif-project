import React from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiBookBookmark } from 'react-icons/bi';
import { BsFillTriangleFill, BsQuestion } from 'react-icons/bs';
import { RiPlayListAddFill } from 'react-icons/ri';
import Dodecahedron from '../../Common/Animations/Dodecahedron';
import CommentSection from "../Containers/CommentSection";
import { AddClassButton, LoadMessages, SinifClassComponent, SinifClassMessageComponent } from '../../Common/Components/HomeComponents';
import './Styles/HomeScreenStyle.css';

const HomeScreen = (props) => <>
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
        <article>
            <AddClassButton onClick={props.setJoinClassDialog} />
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
            {
                props.classCode && props.messages ?
                    props.messages[0] ? props.messages.map((message, i) => {
                        if (i === props.messages.length - 1 && props.messages.length < props.totalLength) return <>
                            <SinifClassMessageComponent
                                style={message._id === props.questionId ? {
                                    backgroundColor: "var(--tertiary-color)",
                                    boxShadow: "0 0 15px 1px var(--secondary-color)"
                                } : {}}
                                onClick={() => props.changeQuestion(message._id)} message={message} />
                            <LoadMessages
                                onClick={props.handleLoadMessages}
                                label="Cargar más preguntas"
                            />
                        </>

                        return <SinifClassMessageComponent
                            style={message._id === props.questionId ? {
                                backgroundColor: "var(--tertiary-color)",
                                boxShadow: "0 0 15px 1px var(--secondary-color)"
                            } : {}}
                            message={message} onClick={() => props.changeQuestion(message._id)} />
                    })
                        : <aside>
                            <span>
                                Vaya, parece que nadie preguntó aún. <br />
                                Te dejamos esta animación hasta que alguien tenga alguna duda.
                            </span>
                            <Dodecahedron />
                        </aside>
                    : <aside> <span> Únete a una clase para continuar </span> </aside>
            }
        </section>
        <CommentSection />
        <section style={{ flex: .35 }}>Others</section>
    </section>
</>

export default HomeScreen;
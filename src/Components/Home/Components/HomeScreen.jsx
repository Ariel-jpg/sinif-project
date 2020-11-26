import React from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiBookBookmark } from 'react-icons/bi';
import { BsFillTriangleFill, BsQuestion } from 'react-icons/bs';
import { RiPlayListAddFill } from 'react-icons/ri';
import CommentSection from "../Containers/CommentSection";
import { AddClassButton, SinifClassComponent } from '../../Common/Components/HomeComponents';
import './Styles/HomeScreenStyle.css';
import QuestionRenderComponent from '../../Common/Components/QuestionsRenderView';

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
        <CommentSection />
        <section style={{ flex: .35 }}>Others</section>
    </section>
</>

export default HomeScreen;
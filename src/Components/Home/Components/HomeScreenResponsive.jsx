import React from 'react';
import { useState } from 'react';
import { BiBookBookmark } from 'react-icons/bi';
import Dodecahedron from '../../Common/Animations/Dodecahedron';
import { LoadMessages, SinifClassComponent, SinifClassMessageComponent } from '../../Common/Components/HomeComponents';
import './Styles/HomeScreenResponsiveStyle.css';
import { MdAdd } from "react-icons/md";
import { AiOutlineSetting } from 'react-icons/ai';
import { BsQuestion } from 'react-icons/bs';
import { RiPlayListAddFill } from 'react-icons/ri';

const RenderViews = ({ props }) => {
    switch (props.section) {
        case 0: return <section className="ViewRender ClassMessagesResponsiveSectionStyle">
            <span>
                <BiBookBookmark />
                {props.lessons.find(_class => _class._id === props.classCode)?.className || "No hay materia seleccionada"}
            </span>
            <SinifClassMessageComponent message={{ title: "No entiendo nada de la última tarea", description: "Nedeah, alguno me ayuda plisssss, estoy durisimo y no entiendo nada?" }} />
            <SinifClassMessageComponent message={{ title: "No entiendo nada de la última tarea", description: "Nedeah, alguno me ayuda?" }} />
            <SinifClassMessageComponent message={{ title: "No entiendo nada de la última tarea", description: "Nedeah, alguno me ayuda?" }} />
            <SinifClassMessageComponent message={{ title: "No entiendo nada de la última tarea", description: "Nedeah, alguno me ayuda?" }} />
            <SinifClassMessageComponent message={{ title: "No entiendo nada de la última tarea", description: "Nedeah, alguno me ayuda?" }} />
            <SinifClassMessageComponent message={{ title: "No entiendo nada de la última tarea", description: "Nedeah, alguno me ayuda?" }} />
            <SinifClassMessageComponent message={{ title: "No entiendo nada de la última tarea", description: "Nedeah, alguno me ayuda?" }} />
            <SinifClassMessageComponent message={{ title: "No entiendo nada de la última tarea", description: "Nedeah, alguno me ayuda?" }} />
            <SinifClassMessageComponent message={{ title: "No entiendo nada de la última tarea", description: "Nedeah, alguno me ayuda?" }} />
            <SinifClassMessageComponent message={{ title: "No entiendo nada de la última tarea", description: "Nedeah, alguno me ayuda?" }} />
            <SinifClassMessageComponent message={{ title: "No entiendo nada de la última tarea", description: "Nedeah, alguno me ayuda?" }} />
            <SinifClassMessageComponent message={{ title: "No entiendo nada de la última tarea", description: "Nedeah, alguno me ayuda?" }} />
        </section>
        case 1:
        case 2: return <section className="ViewRender"></section>

        default: return <section className="ViewRender" style={{ flex: .1 }} />
    }
}

const HomeScreenResponsive = (props) => {
    const [section, setsection] = useState(0);
    // 0 = Questions View
    // 1 = Comments View
    // 2 = Menu View
    
    return <section style={{ minHeight: window.screen.height * 0.8 }} className="MainResponsiveView">
        <RenderViews props={{ ...props, section, setsection }} />
        <aside
            style={section === 3 ? {
                flex: .9
            } : undefined}
        >
            <span onClick={() => setsection(section === 3 ? 0 : 3)} />
            <div>
                {
                    section === 3 ? <article>
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
                    </article>
                        :
                        <>
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
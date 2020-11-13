import React, { useEffect, useState } from 'react';
import Media from "react-media";

import { SinifTitleWithDescription } from '../../Common/Components/SinifTextTypes';
import { SinifTextArrowRight } from '../../Common/Components/SinifTextArrowStyle';
import SinifMessageComponent from '../../Common/Components/SinifMessageComponent';
import SinifCopyright from '../../Common/Components/SinifCopyright';

import Themes from '../../Constants/Themes';

import Login from '../Containers/Login';
import Registry from '../Containers/Registry';

import "./Styles/SessionWrapperScreenStyle.css";

const WrapperItemComponent = ({ title, content, theme, state, setState, setPageColor, resetColors }) => <button className="H3LoginStyle"
    style={{
        backgroundColor: state && theme.tertiaryColor,
        color: theme.primaryColor,
        height: state ? "30%" : "0%"
    }}
    onClick={() => { resetColors(); setState(!state); setPageColor(theme.colorThemeName); }}>
    <SinifTextArrowRight
        containerStyle={{
            backgroundColor: theme.secondaryColor,
            marginTop: 10,
            paddingLeft: 10, paddingRight: 10, paddingBottom: 5, paddingTop: 5
        }}
        title={title}
        state={state}
    />
    {state && <p> {content} </p>}
</button>

const SessionWrapperScreen = (props) => {
    const [colorPage, setColorPage] = useState("darkTheme");
    const [anonymity, setAnonymity] = useState(false);
    const [technology, setTechnology] = useState(false);
    const [communication, setCommunication] = useState(false);
    const [registerComponent, setRegisterComponent] = useState(false);

    const resetColors = () => {
        setAnonymity(false);
        setTechnology(false);
        setCommunication(false);
    }

    useEffect(() => {
        (!anonymity && !technology && !communication) && setColorPage("darkTheme");
    }, [anonymity, technology, communication])

    return <main className="SessionWrapperScreenStyle">
        <Media query="(min-width: 1199px)" render={() =>
            (
                <section className="overlay" style={{ "--overlay-first-section": Themes[colorPage].tertiaryColor }}>
                    <SinifTitleWithDescription
                        titleStyle={{
                            borderBottom: "solid",
                            borderBottomColor: "white",
                            fontSize: "1.8rem",
                            paddingBottom: "2%",
                        }}
                        textColor={Themes.darkTheme.primaryColor}
                        title="Puntos clave"
                        content="Consideramos 3 puntos que hacen de SINIF una plataforma que destaca."
                        containerStyle={{ marginLeft: "5%", width: "60%" }}
                        descriptionStyle={{ marginTop: "5%", whiteSpace: "pre-line" }} />

                    <WrapperItemComponent title="ANONIMATO"
                        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        theme={Themes.fourthTheme}
                        state={anonymity} setState={setAnonymity}
                        setPageColor={setColorPage}
                        resetColors={resetColors}
                    />
                    <WrapperItemComponent title="TECNOLOGÍA"
                        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        theme={Themes.fifthTheme}
                        state={technology} setState={setTechnology}
                        setPageColor={setColorPage}
                        resetColors={resetColors}
                    />
                    <WrapperItemComponent title="COMUNICACIÓN"
                        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        theme={Themes.sixthTheme}
                        state={communication} setState={setCommunication}
                        setPageColor={setColorPage}
                        resetColors={resetColors}
                    />
                </section>
            )}
        />
        {registerComponent ? <Registry colorPage={colorPage} setRegisterComponent={setRegisterComponent} /> 
            : <Login colorPage={colorPage} setRegisterComponent={setRegisterComponent} />
        }

        <Media query="(max-width: 1199px)" render={() =>
            (
                <article>
                    <SinifTitleWithDescription
                        titleStyle={{
                            borderBottom: "solid",
                            borderBottomColor: "white",
                            fontSize: "1.8rem",
                            paddingBottom: "2%",
                        }}
                        textColor={Themes.darkTheme.primaryColor}
                        title="Puntos claves"
                        content="Consideramos 3 puntos que hacen de SINIF una plataforma que destaca."
                        containerStyle={{ marginTop: "5%", width: "70%", textAlign: "center" }}
                        descriptionStyle={{ marginTop: "5%", whiteSpace: "pre-line" }} />
                    <SinifMessageComponent
                        title="Anonimato"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        theme={Themes.fourthTheme}
                    />
                    <SinifMessageComponent
                        title="Tecnología"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        theme={Themes.fifthTheme}
                    />
                    <SinifMessageComponent
                        title="Comunicación"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        theme={Themes.sixthTheme}
                    />
                    <SinifCopyright />
                </article>
            )}
        />
    </main>
}

export default SessionWrapperScreen;
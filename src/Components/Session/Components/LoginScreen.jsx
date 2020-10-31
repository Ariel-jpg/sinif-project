import React, { useEffect, useState } from 'react';
import Media from "react-media";
import { SinifItem, SinifTitle, SinifTitleWithDescription } from '../../Common/Components/SinifTextTypes';
import { SinifTextArrowRight } from '../../Common/Components/SinifTextArrowStyle';
import SinifCopyright from '../../Common/Components/SinifCopyright';
import Themes from '../../Constants/Themes';
import "./Styles/LoginScreenStyle.css";
import { FaFingerprint } from "react-icons/fa";
import SinifMessageComponent from '../../Common/Components/SinifMessageComponent';

const LoginItemComponent = ({ title, content, theme, state, setState, setPageColor, resetColors }) => <button className="H3LoginStyle"
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

export default (props) => {
    const [colorPage, setPageColor] = useState("darkTheme");
    const [anonymity, setAnonymity] = useState(false);
    const [technology, setTechnology] = useState(false);
    const [communication, setCommunication] = useState(false);

    const [dniUser, setDniUser] = useState("");
    const [passwordUser, setPasswordUser] = useState("");

    const resetColors = () => {
        setAnonymity(false);
        setTechnology(false);
        setCommunication(false);
    }

    useEffect(() => {
        (!anonymity && !technology && !communication) && setPageColor("darkTheme");
    }, [anonymity, technology, communication])

    return <main className="LoginScreenStyle">
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

                    <LoginItemComponent title="ANONIMATO"
                        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        theme={Themes.fourthTheme}
                        state={anonymity} setState={setAnonymity}
                        setPageColor={setPageColor}
                        resetColors={resetColors}
                    />
                    <LoginItemComponent title="TECNOLOGÍA"
                        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        theme={Themes.fifthTheme}
                        state={technology} setState={setTechnology}
                        setPageColor={setPageColor}
                        resetColors={resetColors}
                    />
                    <LoginItemComponent title="COMUNICACIÓN"
                        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        theme={Themes.sixthTheme}
                        state={communication} setState={setCommunication}
                        setPageColor={setPageColor}
                        resetColors={resetColors}
                    />
                </section>
            )}
        />

        <section className="LoginScreenSecondSectionStyle overlay" style={{ "--overlay-second-section": "rgba(0, 0, 0, .5)", backgroundColor: Themes[colorPage].tertiaryColor }}>
            <SinifTitle textColor={Themes[colorPage].primaryColor} fontWeight="300" title="INICIAR SESIÓN" />
            <form>
                <dl>
                    <input

                        value={dniUser}
                        onChange={text => setDniUser(text.target.value)}
                        style={{
                            color: Themes[colorPage].primaryColor,
                            borderColor: Themes[colorPage].primaryColor,
                            "--placeholder-login-color": Themes[colorPage].primaryColor
                        }}
                        placeholder="DNI" />
                    <input

                        value={passwordUser}
                        onChange={text => setPasswordUser(text.target.value)}
                        style={{
                            color: Themes[colorPage].primaryColor,
                            borderColor: Themes[colorPage].primaryColor,
                            "--placeholder-login-color": Themes[colorPage].primaryColor
                        }}
                        placeholder="CONTRASEÑA"
                        type="password" />
                </dl>
                <button>
                    <FaFingerprint
                        onClick={() => props.loginRequest()}
                        color={dniUser && passwordUser ? Themes[colorPage].primaryColor : Themes[colorPage].secondaryColor}
                        size="100"
                    />
                </button>
            </form>
            <aside>
                <span style={{ "--color-line-span": Themes[colorPage].primaryColor, color: Themes[colorPage].primaryColor }}>Ó</span>
                <SinifItem
                    onClick={() => props.history.push("/join")}
                    textColor={Themes[colorPage].primaryColor} fontWeight="300" title="REGISTRARSE" />
                <Media query="(min-width: 1199px)" render={() => <SinifCopyright color="white" />} />
            </aside>
        </section>
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
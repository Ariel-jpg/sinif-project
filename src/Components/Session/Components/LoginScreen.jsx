import React, { useState } from 'react';
import { SinifButton, SinifTitle } from '../../Common/Components/SinifTextTypes';
import Themes from '../../Constants/Themes';
import { FaFingerprint } from "react-icons/fa";
import { fieldValidation, toastError } from '../../utils/functions';
import "./Styles/LoginScreenStyle.css";
import ActivityWrapper from '../../Common/Components/SInifLoader';

const LoginScreen (props) => {
    const [dniUser, setDniUser] = useState("");
    const [passwordUser, setPasswordUser] = useState("");

    const onSubmit = e => {
        e.preventDefault();
        (fieldValidation(dniUser) && fieldValidation(passwordUser))
            ? props.loginRequest({ _id: dniUser, password: passwordUser }) : toastError("Debe completar todos los campos", 2000)
    }

    return <section className="LoginScreenSecondSectionStyle overlay"
        style={{ backgroundColor: Themes[props.colorPage].tertiaryColor }}
    >
        <SinifTitle textColor={Themes[props.colorPage].primaryColor} fontWeight="300" title="INICIAR SESIÓN" />
        <form onSubmit={e => onSubmit(e)}>
            <dl>
                <input
                    type="number"
                    value={dniUser}
                    onChange={text => setDniUser(text.target.value)}
                    style={{
                        color: Themes[props.colorPage].primaryColor,
                        borderColor: Themes[props.colorPage].primaryColor,
                        "--placeholder-login-color": Themes[props.colorPage].primaryColor
                    }}
                    placeholder="DNI" />
                <input
                    value={passwordUser}
                    onChange={text => setPasswordUser(text.target.value)}
                    style={{
                        color: Themes[props.colorPage].primaryColor,
                        borderColor: Themes[props.colorPage].primaryColor,
                        "--placeholder-login-color": Themes[props.colorPage].primaryColor
                    }}
                    placeholder="CONTRASEÑA"
                    type="password" />
            </dl>
            <button disabled={props.loginPending}>
                <ActivityWrapper
                    component={
                        <FaFingerprint
                            color={dniUser && passwordUser ? Themes[props.colorPage].primaryColor : Themes[props.colorPage].secondaryColor}
                            size="100"
                        />
                    }
                    pending={props.loginPending}
                    pendingColor={Themes[props.colorPage].primaryColor}
                />
            </button>
        </form>
        <aside>
            <span style={{ "--color-line-span": Themes[props.colorPage].primaryColor, color: Themes[props.colorPage].primaryColor }}>Ó</span>
            <SinifButton
                disabled={props.loginPending}
                onClick={() => props.setRegisterComponent(true)}
                textColor={Themes[props.colorPage].primaryColor} fontWeight="300" title="REGISTRARSE" />
        </aside>
    </section>
};

export default LoginScreen;
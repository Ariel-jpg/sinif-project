import React, { useState } from 'react';
import { Sentry } from 'react-activity';
import Media from 'react-media';
import { SinifButton, SinifTitle } from '../../Common/Components/SinifTextTypes';
import Themes from '../../Constants/Themes';
import { fieldValidation, toastError } from '../../utils/functions';
import "./Styles/RegistryScreenStyle.css";

const RegistryScreen = (props) => {
    const [dni, setDni] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState(undefined);

    const onSubmit = e => {
        e.preventDefault();
        (fieldValidation(dni) && fieldValidation(username) && fieldValidation(password) && role !== undefined)
            ? props.registerRequest({ _id: dni, username, password, role })
            : toastError("Debe completar todos los campos", 2000);
    }

    return <section className="RegistryScreenStyle overlay" style={{
        "--placeholder-registry-color": Themes[props.colorPage].primaryColor,
        backgroundColor: Themes[props.colorPage].tertiaryColor
    }}>
        <SinifTitle textColor={Themes[props.colorPage].primaryColor} fontWeight="300" title="REGISTRARSE" />
        <form onSubmit={e => onSubmit(e)}>
            <Media query="(min-width: 1199px)" render={() => <dl>
                <input
                    value={dni}
                    onChange={text => { setDni(text.target.value) }}
                    type="number"
                    placeholder="Dni" />
                <input
                    value={username}
                    onChange={text => setUsername(text.target.value)}
                    placeholder="Nombre y apellido" />
            </dl>} />
            <Media query="(max-width: 1199px)" render={() => <>
                <input
                    value={dni}
                    onChange={text => setDni(text.target.value)}
                    type="number"
                    placeholder="Dni" />
                <input
                    value={username}
                    onChange={text => setUsername(text.target.value)}
                    placeholder="Nombre y apellido" />
            </>} />

            <input
                value={password}
                type="password"
                onChange={text => setPassword(text.target.value)}
                placeholder="Contraseña" />
            <div>
                <h3>Soy...</h3>
                <aside >
                    <button
                        onClick={e => { e.preventDefault(); setRole(false); }}
                        style={{ borderColor: role === false ? Themes[props.colorPage].primaryColor : "transparent" }}>
                        Estudiante
                    </button>
                    <button
                        onClick={e => { e.preventDefault(); setRole(true); }}
                        style={{ borderColor: role === true ? Themes[props.colorPage].primaryColor : "transparent" }}>
                        Profesor
                    </button>
                </aside>
            </div>
            <SinifButton
                disabled={props.registryPending}
                fontWeight="lighter"
                onSubmit={e => onSubmit(e)}
                textColor={Themes[props.colorPage].primaryColor}
                title={props.registryPending ? <Sentry color={Themes[props.colorPage].primaryColor} /> : "Confirmar"} />
        </form>
        <SinifButton
            fontWeight="lighter"
            onClick={e => props.setRegisterComponent(false)}
            textColor={Themes[props.colorPage].primaryColor} title="INICIAR SESIÓN"
            disabled={props.registryPending}
        />
    </section>
}

export default RegistryScreen;
import React from 'react';

import { ThemesArray } from "../../Constants/Themes";

import "./Styles/ConfigurationSectionStyle.css";

const ThemesComponent = ({ theme, i, onClick }) => <div onClick={onClick} className="themeComponentStyle">
    <h3>Tema {i}: </h3>
    <div style={{ backgroundColor: theme.primaryColor }}></div>
    <div style={{ backgroundColor: theme.secondaryColor }}></div>
    <div style={{ backgroundColor: theme.tertiaryColor }}></div>
</div>

const ConfigurationSection = ({ changeTheme, responsiveView }) => <article className="ConfigurationSectionStyle">
    {responsiveView && <h2>Temas disponibles</h2>}
    {
        ThemesArray.map((theme, i) => <ThemesComponent onClick={() => changeTheme(theme.colorThemeName)} theme={theme} i={i} />)
    }
</article>

export default ConfigurationSection;
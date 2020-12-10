import React from 'react';

import { RiArrowDownSLine } from 'react-icons/ri';

import "./Styles/SinifTextArrowStyle.css";

export const SinifTextArrowLeft = ({ title, iconType, iconName, style }) => <pre style={{
    display: "flex",
    justifyContent: "space-evenly",
    ...style
}}>
    <RiArrowDownSLine color="red" />

    <strong style={{ fontStyle: "normal", }}>
        {title}
    </strong>
</pre>

export const SinifTextArrowRight = ({
    title, iconSize, iconColor, textStyle, containerStyle, state
}) =>
    <pre className="SinifTextArrowStyle" style={{ ...containerStyle }}>
        <strong style={{ ...textStyle }}>
            {title}
        </strong>
        <RiArrowDownSLine color={iconColor} size={iconSize} style={{ marginTop: 3, transform: state ? "rotate(180deg)" : "rotate(0deg)" }} />
    </pre>
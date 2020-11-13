import React from 'react'

export const SinifTitle = ({ title, textColor, style, fontSize, margin, padding, fontWeight = 500 }) =>
    <h1 style={{ color: textColor, zIndex: 1, fontSize, fontWeight, margin, padding, ...style }}>{title}</h1>

export const SinifItem = ({ title, textColor, style, fontSize = "1.3rem", margin, padding, fontWeight = 500, onClick }) =>
    <h2 onClick={onClick}
        style={{ color: textColor, cursor: "pointer", zIndex: 1, fontSize, fontWeight, margin, padding, ...style }}>{title}</h2>

export const SinifTitleWithDescription = ({ title, content, textColor, fontWeight = 300, containerStyle, descriptionStyle, titleStyle }) => <pre style={{ ...containerStyle, zIndex: 1, }}>
    <strong style={{ color: textColor, ...titleStyle }}>{title}</strong>
    <p style={{ ...descriptionStyle, color: textColor }}>{content}</p>
</pre>

export const SinifButton = ({ title, textColor, style, fontSize = "1.3rem", margin, padding, fontWeight = 500, onClick, onSubmit, disabled = false }) =>
    <button
        disabled={disabled}
        onSubmit={onSubmit} onClick={onClick}
        style={{ color: textColor, cursor: "pointer", zIndex: 1, fontSize, fontWeight, margin, padding, ...style }}>{title}</button>
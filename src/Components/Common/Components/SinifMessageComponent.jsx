import React from 'react';

export default ({
    title,
    description,
    theme,
    containerStyle,
    titleStyle,
    textStyle,
}) => <pre style={{
    backgroundColor: theme.tertiaryColor,
    whiteSpace: "pre-line",
    padding: "5%",
    width: "70%",
    borderRadius: 25,
    textAlign: "center",
    ...containerStyle
}} className="SinifMessageComponentStyle" >
        <h4
            style={{ color: theme.primaryColor, paddingBottom: description && "5%", fontSize: "1.1rem",  ...titleStyle }}
            children={title} />
        { description && <p
            style={{ color: theme.primaryColor, fontSize: "1rem", fontWeight: "400", ...textStyle }}
            children={description}
        /> }
    </pre>
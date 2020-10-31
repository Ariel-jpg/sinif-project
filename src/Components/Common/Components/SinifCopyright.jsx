import React from 'react';

export default ({color}) => <small style={{
    alignSelf: "flex-end", marginRight: 10,
    fontSize: ".7rem",
    color: color || "rgba(255, 255, 255, .3)"
}}>
    © {new Date().getFullYear()} Sinif - Ariel Aguilera
</small>
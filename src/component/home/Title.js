import React from 'react';



function Title({ text,subtitle }) {
    return <React.Fragment>
        <p style={{ fontSize: 45, color: "olive" }}>{text}</p>
        <p>{subtitle}</p>
    </React.Fragment>;
}

export default Title;
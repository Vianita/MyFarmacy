import React from 'react';



function LearnLink({ link }) {
     return <a
        className="App-link"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
    >
    Learn React
    </a>
}

export default LearnLink;
import React from 'react';

import Title from './Title';
import LearnLink from './LearnLink';

import Counter from './Counter';
import UserForm from './UserForm';







function Home({ link, text, subtitle, children }) {
    const onClickSave = () => console.log("save");
    return ( 
        <header className="App-header">
        <UserForm maxLength={10} greeting={'Formulario de Ingreso'} onClickSave={onClickSave} saveLabel={"Save"} />
        <Counter initial={1} max={10} min={1} />
        <Title text={text} subtitle={subtitle} />
        <LearnLink link={link} />
        {children}
    </header>
    );
}


export default Home;
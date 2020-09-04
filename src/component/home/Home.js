import React from 'react';

import Title from './Title';
import Counter from './Counter';
import UserForm from './UserForm';



function Home({ text, subtitle, children }) {
    const onClickSave = () => console.log("save");
    return ( 
        <header className="App-header">
        <UserForm maxLength={10} greeting={'Formulario de Ingreso'} onClickSave={onClickSave} saveLabel={"Save"} />
        <Counter initial={1} max={10} min={1} />
        <Title text={text} subtitle={subtitle} />
        {children}
        
    </header>
    );
}


export default Home;
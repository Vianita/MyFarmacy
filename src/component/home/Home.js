import React from 'react';



import UserForm from './UserForm';




function Home({ children }) {
    const onClickSave = () => console.log("save");
    return ( 
        <header className="App-header">
        <UserForm maxLength={10} greeting={'Formulario de Ingreso'} onClickSave={onClickSave} saveLabel={"Save"} />
        
        {children}
        
    </header>
    );
}


export default Home;
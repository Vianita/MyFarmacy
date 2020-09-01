import React from 'react';
// import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import {primaryBackground, isDisable} from '../../constants';




function Form() {
    // const [name, setName] = useState(null);
    // const [lastName, setLastName] = useState(null);
    // const [email, setEmail] = useState(null);

    function onNameChange(event) {
        console.log(event.target.value);
    }

    function onLastNameChange(event) {
        console.log(event.target.value);  
    }

    function onEmailChange(event) {
        console.log(event.target.value);
    }


    return <>
        <p>Formulario de ingreso</p>
        <TextField label= "Nombre"  onInput={onNameChange} />
        <TextField label= "Apellido" onInput={onLastNameChange}  />
        <TextField label= "E-mail" onInput={onEmailChange}  />

        <Button className={primaryBackground} disabled={isDisable} >Agregar</Button>
    </>
}

export default Form;
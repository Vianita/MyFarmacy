import React, { useState } from 'react';
import { Button, TextField, Box } from '@material-ui/core';
import {primaryBackground} from '../../constants';




function UserForm({greeting, maxLength, onClickSave}) {
    const [user, setUser] = useState({name:"", lastname:"", email:""})


    const handleChange = (attr) => (event)=> {
        const newValue = event.target.value;
        if(newValue.length < maxLength)
           setUser({...user, [attr]: newValue});
    }
    
    
    let isDisable = false || !user.name || !user.lastname
    return <>
        <h1>{greeting}</h1>
        <Box display= "flex"  flexDirection= "column" >

            <TextField label= "Name"  value={user.name}             onChange={handleChange("name")} />
            <TextField label= "Last Name"  value={user.lastname}    onChange={handleChange("lastname")} />
            <TextField label= "Email"  value={user.email}               onChange={handleChange("aemail")} />
            <TextField label= "Name length"  value={user.name.length} disabled />

            lastname: {user.lastname}
            <Button className={primaryBackground} disabled={isDisable} onClick={onClickSave} >Agregar</Button>

        </Box>
    </>;
    
}


export default UserForm;
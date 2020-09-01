import React, { useState } from 'react';
import { Button, TextField, Box } from '@material-ui/core';





function UserForm({greeting, maxLength, onClickSave, saveLabel}) {
    const [user, setUser] = useState({name:"", lastname:"", email:""})


    const handleChange = (attr) => (event)=> {
        const newValue = event.target.value;
        if(newValue.length < maxLength)
           setUser({...user, [attr]: newValue});
    }
    
    
    let isDisable = !user.name || !user.lastname

    const error = isDisable?"Complete los campos":""

    return <>
        <h5 style={{ color:"GrayText" }} >{greeting}</h5>
        <Box display= "flex"  flexDirection= "column" >

            <TextField label= "Name"  value={user.name}             onChange={handleChange("name")} />
            <TextField label= "Last Name"  value={user.lastname}    onChange={handleChange("lastname")} />
            <TextField label= "Email"  value={user.email}               onChange={handleChange("aemail")} />
            <TextField label= "Name length"  value={user.name.length} disabled />

            <p style={{ backgroundColor:"GrayText"}} >{error}</p>
            <Button variant="contained" color="default"  disabled={isDisable} onClick={onClickSave} >{saveLabel}</Button>
  

        </Box>

        <br />
        <br />
        <br />
    </>;
    
}


export default UserForm;
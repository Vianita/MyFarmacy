import React, { useState } from 'react';
import { makeStyles, IconButton, Button, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStayles = makeStyles((theme) => ({
    IconButton: {
        marginRight: theme.spacing(1),
    }

}))



function Counter({ initial, max, min, onAdd }) {
    const classes = useStayles();
    const [count, setCount] = useState(initial);

    const incrementOne = () => {
        if(count < max)
            setCount(count + 1);
    };

    const decrementOne= () => {
        if(count > min)
            setCount(count - 1);
    };


    return <div style={{ display: 'flex', marginTop: 10, flexDirection: 'column', justifyContent: 'center'}}>
        <div style={{ display:"flex", flexDirection:"row", alignItems: "center", justifyContent: "space-between", color:"GrayText"}}>
            <IconButton edge="start" className={classes.IconButton} color="primary" aria-label="add" disabled={count === max} onClick={incrementOne}>
                <AddIcon />
            </IconButton> 
            {count}
            <IconButton edge="start" className={classes.IconButton} color="primary" aria-label="subs" onClick={decrementOne}>
                <RemoveIcon />
            </IconButton>
        </div>
         
            {count === max
                ?
                <Typography variant="subtitle1" color="error" component="h2" >
                "Usted llegó al máximo de productos"
                </Typography>
                : `Quedan ${max - count} productos`
            } 

        <Button variant="contained" color="primary" onClick={(e) => onAdd=('Ir al carrito')}>
          Ir al carrito
        </Button>
        
    </div>
    
}

export default Counter;
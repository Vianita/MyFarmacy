import React, { useState } from 'react';
import { IconButton, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';





function Counter({ initial, max, min, num}) {
    
    const [count, setCount] = useState(initial);

    const incrementOne = () => {
        if(count < max){
            setCount(count + 1);
            num(count + 1);
        }

    };

    const decrementOne= () => {
        if(count > min){
            setCount(count - 1);
            num(count - 1);
        }

    };

    


    return <div style={{ display:"flex", flexDirection:"column", alignItems: "center",  color:"Background"}}>
        <div>
            <IconButton edge="start"  color="primary" aria-label="add" disabled={count === max} onClick={incrementOne}>
                <AddIcon />
            </IconButton> 
            {count}
            <IconButton edge="start"  color="primary" aria-label="subs" onClick={decrementOne}>
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

        
    </div>
    
}

export default Counter;
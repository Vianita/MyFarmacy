import React, { useState } from 'react';

import { Button, Typography } from '@material-ui/core';
import Counter from '../../component/home/Counter';import { Link } from 'react-router-dom';







const ItemDetail = ({product}) => {
    const [contador, setContador] = useState();

    function getCounter(num) {
        setContador(num);
    }

    function onAdd(num) {
        console.log()
    }

    return <div style={{display:"flex", flexDirection:"row", alignItems:"center"}} >
        <div style={{backgroundColor: "white"}} >
        <img src={"../../assets/images/" + product.image} width={90}  alt="asp" />
        <Typography color="primary" variant="h4" >{product.name}</Typography>
        <Typography color="textSecondary" variant="body1">{product.description}</Typography>
        

    </div>
    

    
    <div display="flex" flexDirection="column" justify-content="center">
        <Counter initial={1} max={5} min={1} num={(count) => getCounter(count)} />
        <Link style={{textDecoration:"none"}} to={`/cart`}>
        <Button variant="contained" color="primary" onClick={(e) => onAdd(contador)}>
          Comprar
          <span style={{marginLeft:30}}>{contador}</span>
        </Button>
        </Link>
    </div>
    </div>

    
}

export default ItemDetail;

import React from 'react';

import { Typography } from '@material-ui/core';
import Counter from '../../component/home/Counter';







const ItemDetail = ({product}) => {
    return <div style={{display:"flex", flexDirection:"row", alignItems:"center"}} >
        <div style={{backgroundColor: "white"}} >
        <img src={"assets/images/asp400.svg"} width={90}  alt="asp" />
        <Typography color="primary" variant="h4" >{product.name}</Typography>
        <Typography color="textSecondary" variant="body1">{product.description}</Typography>
    </div>
    
    <div display="flex" flexDirection="column" justify-content="space-around">
        <Counter initial={1} max={10} min={1} />
    </div>
    </div>

    
}

export default ItemDetail;

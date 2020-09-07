import React from 'react';
import asp400 from "../../assets/images/asp400.svg";
import { Typography } from '@material-ui/core';
import Counter from '../../component/home/Counter';



const ItemDetail = () => {
    return <div display0="flex" flexDirection="row" justify-content="space-between">
        <div style={{backgroundColor: "white"}} >
        <img src={asp400} width={90}  alt="asp" />
        <Typography color="primary" variant="h4" >Aspirina 400</Typography>
        <Typography color="textSecondary" variant="body1">Comprimidos efervescentes 400mg</Typography>
    </div>
    <div display0="flex" flexDirection="row" justify-content="space-around">
        <Counter initial={1} max={10} min={1} />
    </div>
    </div>
}

export default ItemDetail;

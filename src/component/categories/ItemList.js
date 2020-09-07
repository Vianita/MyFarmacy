import React from 'react';
import { Button } from '@material-ui/core';



function ItemList() {
    return new Promise((res, rej) =>{
        setTimeout(() => {
            res([{id: "340020", name: "aspirina-c", description: "comprimidos-efervecentes-20-unidades-240-mg", stock: 5}, 
            {id: "234050", name: "dipirona", description: "comprimido-100-tabletas-recubiertas-500-mg", stock: 10},
            {id: "268050", name: "naproxeno", description: "comprimido-20-tabletas-500-mg", stock: 6}]);
        }, 3000);
    });
}


export function Medicines({products}) {
    return <>
        <ul>
                {products.map((p, idx) => <li style={{ fontSize:"18px" }} key={p.id}>{p.name + "-"}{p.description}{p.stock} <Button>Detalle</Button>  </li>)}
        </ul>
    </>
}


export default ItemList;
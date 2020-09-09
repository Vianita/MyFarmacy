import React from 'react';
import { Button } from '@material-ui/core';


export function getOneItem(id) {
    return new Promise((res, rej) =>{
        setTimeout(() => {
            res(items.find(product => product.id === id));
        }, 3000);
    });
}

function ItemList() {
    return new Promise((res, rej) =>{
        setTimeout(() => {
            res(items);
        }, 3000);
    });
}
const items = [{id: "340020", name: "Aspirina C", description: "Comprimidos efervecentes 20 unidades 240 mg", stock: 5}, 
                {id: "234050", name: "Dipirona", description: "Comprimido 100 tabletas recubiertas 500 mg", stock: 10},
                {id: "268050", name: "Naproxeno", description: "Comprimido 20 tabletas 500 mg", stock: 6}]

export function Medicines({products}) {
    return <>
        <ul>
                {products.map((p, idx) => <li style={{ fontSize:"18px" }} key={p.id}>{p.name + " - "}{p.description}{p.stock} <Button href={`/item/${p.id}`}>Detalle</Button>  </li>)}
        </ul>
    </>
}


export default ItemList;
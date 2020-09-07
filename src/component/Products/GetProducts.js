import React from 'react';




function GetProducts() {
    return new Promise((res, rej) =>{
        setTimeout(() => {
            res([{id: "AB01", name: "camisa", description: "Camisa roja talla S", stock: 5}, 
            {id: "AC01", name: "blusa", description: "Blusa negra talla L", stock: 10},
            {id: "PI04", name: "pantalón", description: "Jeans talla L", stock: 6}]);
        }, 3000);
    });
}

export function ProductList({products}) {
        return <>
            <ul>
                    {products.map((p, idx) => <li key={p.id}>{p.id + "-"} {p.name}</li>)}
            </ul>
        </>
    }




export default GetProducts;
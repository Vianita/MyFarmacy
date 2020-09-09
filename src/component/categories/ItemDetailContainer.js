import React, { useEffect, useState } from 'react';
import { getOneItem } from './ItemList';
import ItemDetail from './ItemDetail';




function ItemDetailContainer(props) {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        // Hagamos cosas acá para consumir recursos caros
        getOneItem("234050").then(res => {
            setProduct(res);
            setLoading(false);
        });
        
    }, []);
  
    return <>
    { loading && <p>Loading...</p>}
    <ItemDetail product={product} />
    
</>
}




    export default ItemDetailContainer;
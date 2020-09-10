import React, { useEffect, useState } from 'react';
import { getOneItem } from './ItemList';
import ItemDetail from './ItemDetail';
import { useParams, Link } from 'react-router-dom';




function ItemDetailContainer(props) {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        // Hagamos cosas acá para consumir recursos caros
        getOneItem(id).then(res => {
            setProduct(res);
            setLoading(false);
        });
        
    }, [id]);

    

    return <>
        <p>Mostrando item: {id} </p>
        <Link to="/">Volver al listado</Link>

    { loading && <p>Loading...</p>}
    <ItemDetail product={product} />
    
</>
}




    export default ItemDetailContainer;
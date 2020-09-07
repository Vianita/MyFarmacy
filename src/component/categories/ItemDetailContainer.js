import React, { useEffect, useState } from 'react';
import ItemList, { Medicines }  from './ItemList';
import { Box } from '@material-ui/core';



function ItemDetailContainer() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        // Hagamos cosas acá para consumir recursos caros
        ItemList().then(res => {
            setProducts(res);
            setLoading(false);
        });
        
    }, []);
    return <>
    { loading && <p>Loading...</p>}
    <Box display="flex" flexDirection="row" justify-content="space-between">
    <Medicines products={products} />
    </Box>
</>
}




    export default ItemDetailContainer;
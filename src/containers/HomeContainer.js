import React, { useState, useEffect }  from 'react';

import Home from '../component/home/Home';
import { Box } from '@material-ui/core';
import ItemList, { Medicines } from '../component/categories/ItemList';









function HomeContainer() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        // Hagamos cosas acá para consumir recursos caros
        ItemList().then(res => {
            setProducts(res);
            setLoading(false);
        });
        
    }, []);
        

    return  <>
        <Home >
        { loading && <p>Loading...</p>}
        <Box display="flex" flexDirection="row" justify-content="space-around">
        <Medicines products={products} />
        </Box>
        </Home>
    
    </>
}

export default HomeContainer;
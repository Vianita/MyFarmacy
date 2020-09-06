import React, { useEffect, useState }  from 'react';
import Home from '../component/home/Home';
import GetProducts, { ProductList }  from '../component/Products/GetProducts';
import { Box } from '@material-ui/core';
import ItemDetail from '../component/categories/ItemDetail';






function HomeContainer() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        // Hagamos cosas acá para consumir recursos caros
        GetProducts().then(res => {
            setProducts(res);
            setLoading(false);
        });
        
    }, []);

    
    return  <>
    <Home >
    { loading && <p>Loading...</p>}
    <Box display="flex">
    <ProductList products={products} />
    </Box>
    <ItemDetail />
    
    <button type="button" onClick={() => alert('This is a button!')}>Boton</button>
    </Home>
    
    
    

    </>
}

export default HomeContainer;
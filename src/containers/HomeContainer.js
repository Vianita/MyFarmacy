import React, { useEffect, useState }  from 'react';
import Home from '../component/home/Home';
import GetProducts, { ProductList }  from '../component/Products/GetProducts'




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
    <Home link="https://reactjs.org" text="Hello Coders!" subtitle="Lo hice solita!!!!">
    <button type="button" onClick={() => alert('This is a button!')}>Boton</button>
    </Home>
    { loading && <p>Loading...</p>}
    <GetProducts products={products} />
    <ProductList />
    

    </>
}

export default HomeContainer;
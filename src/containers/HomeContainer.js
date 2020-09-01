import React, { useEffect } from 'react';
import Home from '../component/home/Home';




function HomeContainer() {
    useEffect(() => {
        // Hagamos cosas acá para consumir recursos caros
        console.log('Home mounted with hook');
    }, []);


    // NO HACER NADA RARO O PESADO ACÁ

    return  <Home link="https://reactjs.org" text="Hello Coders!" subtitle="Lo hice solita!!!!">
    <button type="button" onClick={() => alert('This is a button!')}>Boton</button>
    </Home>
}

export default HomeContainer;
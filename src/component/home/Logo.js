import React, {useEffect } from 'react';




function Logo({ logo }) {
    useEffect(() => {
        // Hagamos cosas acá para consumir recursos caros
        console.log('Logo mounted');
    }, []);

    
}

export default Logo;
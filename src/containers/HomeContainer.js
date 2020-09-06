import React  from 'react';
import Home from '../component/home/Home';

import { Box } from '@material-ui/core';
import ItemDetail from '../component/categories/ItemDetail';
import ItemDetailContainer from '../component/categories/ItemDetailContainer';






function HomeContainer() {
    return  <>
    <Home >
   
    
    <Box display="flex">
    <ItemDetailContainer />
    <ItemDetail />
    </Box>
    
    <button type="button" onClick={() => alert('This is a button!')}>Boton</button>
    </Home>
    
    
    

    </>
}

export default HomeContainer;
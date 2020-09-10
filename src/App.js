import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import HomeContainer from './containers/HomeContainer';
import NavBarContainer from './containers/NavBarContainer';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './themeConfig';
import ItemDetailContainer from './component/categories/ItemDetailContainer';
//import { Box } from '@material-ui/core';


function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <div >
      <NavBarContainer />
      <Switch>
      {/* <Box display="flex" flexDirection="row" justify-content="space-around" > */}
      <Route exact path="/">
      <HomeContainer />
      </Route>
      <Route path="/item/:id" >
      <ItemDetailContainer />
      </Route>
      {/* </Box> */}
      <Route path="/cart" >
      <h1>Cart view</h1>
      </Route>
      </Switch>
      
    </div>
    </ThemeProvider>
    </BrowserRouter>
    
  );
}




export default App;

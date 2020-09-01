import React from 'react';

import './App.css';
import HomeContainer from './containers/HomeContainer';
import NavBarContainer from './containers/NavBarContainer';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './themeConfig';



function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <NavBarContainer />
      <HomeContainer /> 
    </div>
    </ThemeProvider>
  );
}

export default App;

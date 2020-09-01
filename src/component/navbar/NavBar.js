import React from 'react';


import { makeStyles, AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';



const useStayles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


function NavBar() {
    const classes = useStayles();
    
    return <div className={classes.root}>
        <AppBar position="fixed">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" >
                  <img src='/logo-ph.svg'
                      height={40}   
                      alt="logoP" />
                </Typography>
                <Typography variant="h6" className={classes.title}>
                  My Pharmacy
                </Typography>
                <IconButton aria-label="ShoppingCart" color="inherit" onClick={(e) => alert('Haz login para agregar productos al carro')}>
                  <ShoppingCartIcon />
                </IconButton>
                <Button color="inherit">
                  Login
                </Button>
            </Toolbar>
        </AppBar>
        <div className={classes.offset}></div>
    </div>
}

export default NavBar;
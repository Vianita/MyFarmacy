import React from 'react';


import { makeStyles, AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link, NavLink } from 'react-router-dom';




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
    const [expanded, setExpanded] =React.useState(false);
    const openMenu = () => {
      setExpanded(!expanded)
    }
    return <div className={classes.root}>
        <AppBar position="fixed">
          {expanded && (<>
          <NavLink to="/" >Home</NavLink>
          <NavLink to="/item/340020" >Detalle</NavLink> </>)}
          
            <Toolbar>
              
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => openMenu() }>
                  <MenuIcon />
                </IconButton>
                
                <Link to={`/`}>
                <Typography variant="h6">
                  <img src='/logo-ph.svg'
                      height={40}   
                      alt="logoP" />
                </Typography>
                </Link>
                <Typography variant="h6" className={classes.title} >
                  My Pharmacy
                </Typography>
                <Link to={`/cart`}>
                <IconButton aria-label="ShoppingCart" color="inherit" >
                  <ShoppingCartIcon />
                </IconButton>
                </Link>
                <Button color="inherit">
                  Login
                </Button>
            </Toolbar>
        </AppBar>
        <div className={classes.offset}></div>
    </div>
}

export default NavBar;
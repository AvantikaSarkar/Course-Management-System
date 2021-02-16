import React, { useEffect, useState }    from 'react';
import {NavLink} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '30vh',
      fontFamily: 'Nunito',
    },
    appbar: {
      background: 'none',
    },
    appbarWrapper: {
      width: '100%',
      margin: '0 auto',
    },
    appbarTitle: {
      flexGrow: '1',
    },
    colorText: {
      color: '#5AFF3D',
    },
    container: {
      textAlign: 'center',
    },
    title: {
      color: '#fff',
      fontSize: '4.5rem',
    },
    goDown: {
      color: '#5AFF3D',
      fontSize: '4rem',
    },
  }));


function Header(){

    const classes = useStyles();
    const activeStyle = {color : "#5AFF3D"};
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
      }, []);

    return(
        <div className={classes.root} id="header"> 
        <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            Treasure<span className={classes.colorText}>Box</span>
          </h1>
          <nav >
            
            <h3>
            
            <NavLink activeStyle={activeStyle} to='/' exact > Home </NavLink>
            {" | "}
            <NavLink activeStyle={activeStyle} to='/about' > About Us </NavLink>
            {" | "}
            <NavLink activeStyle={activeStyle} to='/courses' > Courses </NavLink>
            </h3>
            
        </nav>
        </Toolbar>
      </AppBar>
      
      
      
        
        </div>
    )
}

export default Header
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from '../sidedrawer/SideDrawer';
import '../header/Header.css'
import { red } from '@material-ui/core/colors';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    // border: "1px solid red",
  },
  title: {
    // width: "70%",
    //  border: "1px solid red",
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  let isLogin = props.isLogin;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.root}>
        {isLogin ?
          <Toolbar className="toolbr">

            <div className="container-one">
              <div className="hamburger">
                <SideDrawer >
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                      <MenuIcon />
                  </IconButton>
                  </SideDrawer>
              </div>
              <div className="cu">

                <Button className={classes.title} color="inherit">Contact Us</Button>
              </div>
            </div>
            
            <div className="container-two">
              <Button color="inherit" className={classes.btn} >Add</Button>
              <Button color="inherit" className={classes.btn} >Logout</Button>
            </div>

          </Toolbar>
            :
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Contact Us
              </Typography>
              <Button color="inherit">Login</Button>
              <Button color="inherit">Signup</Button>
          </Toolbar>
        }
        
      </AppBar>
    </div>
  );
}

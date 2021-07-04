import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
        border: "1px solid red",
        width: "100%",
        display: "flex",
        justifyContent:"space evenly"
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
                <Button className={classes.title} color="inherit">Contact Us</Button>
            <div className="container-two">
              <Button color="inherit" className={classes.btn} >Add</Button>
              <Button color="inherit" className={classes.btn} >Logout</Button>
            </div>

          </Toolbar>
            :
            <Toolbar>
              <Button className={classes.title} color="inherit">Contact Us</Button>
              <Button color="inherit">Login</Button>
              <Button color="inherit">Signup</Button>
          </Toolbar>
        }
        
      </AppBar>
    </div>
  );
}

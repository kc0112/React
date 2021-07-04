import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SideDrawer({children}) {
  const classes = useStyles();
  const [state, setState] = React.useState({

    left: false,
   
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        Categories
      </List>
      <Divider />
      <List>
          <ListItem button component="a" href="#" key={'Complete'}>
            <ListItemIcon> < DoneIcon /></ListItemIcon> 
            <ListItemText primary={'Complete'} />
          </ListItem>
          <ListItem  button component="a" href="#" key={'Complete'} key={'InComplete'}>
            <ListItemIcon>< ClearIcon/> </ListItemIcon>
            <ListItemText primary={'Incomplete'} />
          </ListItem>
      </List>
    </div>
  );

  return (
    <div>

        <React.Fragment key={"left"}>
              <Button onClick={toggleDrawer("left", true)}>{children}</Button>
          <SwipeableDrawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {list("left")}
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}
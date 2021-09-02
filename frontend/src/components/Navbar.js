import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Pokemon Solid',
    color: "#22577A",
  },
  AppBar: {
    background: "#FFCB05",
  }
}));

const Navbar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.AppBar}>
                <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Poke 50/50
                </Typography>
                </Toolbar>
            </AppBar>
        </div>
     );
}
 
export default Navbar;
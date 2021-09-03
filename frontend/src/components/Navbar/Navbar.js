import React from "react";
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import useStyles from "./styles";

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
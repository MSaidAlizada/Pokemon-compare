import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from "@material-ui/core";
import PokemonCards from "./PokemonCards/PokemonCards";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: "center"
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Pokemon Solid',
    color: "#22577A",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(6)
  },
}));

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.roots} style={{textAlign:"center", justifyContent: "center"}}>
        <Typography variant="h4" className={classes.title}>Choose which pokemon you like more:</Typography>
        <PokemonCards/>
        </div>
     );
}
 
export default Home;
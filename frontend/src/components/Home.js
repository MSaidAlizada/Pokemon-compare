import React from "react";
import {Typography} from "@material-ui/core";
import PokemonCards from "./PokemonCards/PokemonCards";
import useStyles from "./styles";

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
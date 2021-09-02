import React from "react"
import { Grid } from "@material-ui/core";
import PokemonCard from "./PokemonCard/PokemonCard";

const PokemonCards = () => {
    return (
        <Grid container justifyContent="center">
            <Grid item xs={3}>
                <PokemonCard/>
            </Grid>
            <Grid item xs={2}>
                <PokemonCard/>
            </Grid>
        </Grid>
     );
}
 
export default PokemonCards;
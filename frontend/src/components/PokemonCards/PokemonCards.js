import React, {useState} from "react"
import { Grid } from "@material-ui/core";
import PokemonCard from "./PokemonCard/PokemonCard";

const PokemonCards = () => {
    const [pokemon, setPokemon] = useState({
        pokemon1: {
            name: "Pikachu",
            image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/025.png",
            description: "While sleeping, it generates electricity in the sacs in its cheeks. If it\u2019s not getting enough sleep, it will be able to use only weak electricity.",
            base: {
                "HP": 35,
                "Attack": 55,
                "Defense": 40,
                "SpAttack": 50,
                "SpDefense": 50,
                "Speed": 90,
            },
        },
        pokemon2: {
            name: "Squirtle",
            image: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/007.png",
            description: "Squirtle\u2019s shell is not merely used for protection. The shell\u2019s rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pok\u00e9mon to swim at high speeds.",
            base: {
                "HP": 44,
                "Attack": 48,
                "Defense": 65,
                "SpAttack": 50,
                "SpDefense": 64,
                "Speed": 43
            },
        }
    })
    return (
        <Grid container justifyContent="center">
            <Grid item xs={3}>
                <PokemonCard pokemon={pokemon.pokemon1} otherPokemon={pokemon.pokemon2}/>
            </Grid>
            <Grid item xs={3}>
                <PokemonCard pokemon={pokemon.pokemon2} otherPokemon={pokemon.pokemon1}/>
            </Grid>
        </Grid>
     );
}
 
export default PokemonCards;
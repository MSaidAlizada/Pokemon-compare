import mongoose from "mongoose";
import Pokemon from "../models/pokemon.js";

export function getPokemonById(req,res) {
    const id = req.params.id;
    Pokemon.findOne({ pokemonId: id }, (err, pokemon) => {
        if (!err) {
            res.status(200).json(pokemon);
        }
        else {
            console.log(err);
        }
    })
}

export function createPokemon(req, res) {
    const id = req.body.pokemonId;
    const newPokemon = new Pokemon({ pokemonId: id, upVotes: 0, downVotes: 0 });
    newPokemon.save();
    res.status(201).json(newPokemon);
}
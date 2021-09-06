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
    const upVotes = req.body.upVotes;
    const downVotes = req.body.downVotes;
    const newPokemon = new Pokemon({ pokemonId: id, upVotes: upVotes, downVotes: downVotes });
    newPokemon.save();
    res.status(201).json(newPokemon);
}

export function updatePokemon(req, res) {
    const id = req.body.pokemonId;
    const upVotes = req.body.upVotes;
    const downVotes = req.body.downVotes;
    const newPokemon = new Pokemon({ pokemonId: id, upVotes: upVotes, downVotes: downVotes });
    Pokemon.findOneAndUpdate({ pokemonId: id }, newPokemon, { new: true });
    res.json(newPokemon);
}
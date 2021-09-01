import mongoose from "mongoose";

const pokemonSchema = new mongoose.Schema({
    pokemonId: {type:Number, required:true},
    upVotes: Number,
    downVotes: Number,
});

const Pokemon = new mongoose.model("Pokemon", pokemonSchema);
export default Pokemon;
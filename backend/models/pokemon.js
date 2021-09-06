import mongoose from "mongoose";

const pokemonSchema = new mongoose.Schema({
    pokemonId: {type:Number, required:true},
    upVotes: {type:Number, required:true},
    downVotes: {type:Number, required:true},
});

const Pokemon = new mongoose.model("Pokemon", pokemonSchema);
export default Pokemon;
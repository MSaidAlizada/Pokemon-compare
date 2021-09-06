import { getPokemonById, createPokemon, updatePokemon } from "../controllers/pokemon.js";
import express from "express";
const router = express.Router();

router.get("/getpokemon/:id", getPokemonById);
router.post("/createpokemon", createPokemon);
router.patch("/editPokemon", updatePokemon);

export default router;
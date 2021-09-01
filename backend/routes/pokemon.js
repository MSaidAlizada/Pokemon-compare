import { getPokemonById, createPokemon } from "../controllers/pokemon.js";
import express from "express";
const router = express.Router();

router.get("/getpokemon/:id", getPokemonById);
router.post("/createpokemon", createPokemon);

export default router;
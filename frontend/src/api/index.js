import axios from "axios";

export const fetchRandomPokemon = () => axios.get("https://app.pokemon-api.xyz/pokemon/random");
export const fetchPokemon = (id) => axios.get(`http://localhost:5000/getpokemon/${id}`);
export const createPokemon = (newPokemon) => axios.post("http://localhost:5000/createPokemon", newPokemon);
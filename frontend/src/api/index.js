import axios from "axios";
import qs from "qs";

export const fetchRandomPokemon = () => axios.get("https://app.pokemon-api.xyz/pokemon/random");
export const fetchPokemon = (id) => axios.get(`http://localhost:5000/getpokemon/${id}`);
export const createPokemon = (id, up, down) => axios.post("http://localhost:5000/createPokemon", qs.stringify({pokemonId:id, upVotes:up, downVotes: down}), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
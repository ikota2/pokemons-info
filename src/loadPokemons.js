import axios from "axios";

function transformPokemonData(obj) {
  let theId = obj.url.slice(34, -1);
  return { name: obj.name, id: theId };
}

export function loadPokemons(page) {
  const limit = 5;
  const offset = limit * page;
  return axios(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  ).then((response) => {
    return response.data.results.map((obj) => transformPokemonData(obj));
  });
}

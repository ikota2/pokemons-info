import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Pokemon } from "../Pokemon/Pokemon";
import { Pagination } from "../Pagination/Pagination";
import { loadPokemons } from "../../loadPokemons";
import "./list.css";

export function List() {
  const [pokemons, setPokemons] = useState([]);
  const { page } = useParams();

  useEffect(
    function handleClick() {
      loadPokemons(page).then((nextPokemons) => {
        setPokemons(nextPokemons);
      });
    },
    [page]
  );

  return (
    <div className='list__wrapper'>
      <Pagination />
      {pokemons.map((pokemon) => (
        <Pokemon key={pokemon.id} id={pokemon.id} name={pokemon.name} />
      ))}
    </div>
  );
}

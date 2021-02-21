import React, { useState } from "react";
import axios from "axios";
import { Properties } from "../Properties/Properties";
import "./pokemon.css";

export function Pokemon({ id, name }) {
  const [properties, setProperties] = useState(null);
  // function loadInfo() {
  //   // api
  //   axios(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(
  //     (response) => {
  //       console.log(response);
  //       const { height, weight } = response.data;
  //       setProperties({
  //         height,
  //         weight,
  //       });
  //     },
  //     (reason) => {
  //       console.log("error", reason);
  //     }
  //   );
  // }
  async function loadInfo() {
    try {
      const response = await axios(`https://pokeapi.co/api/v2/pokemon/${id}/`);
      const { height, weight } = response.data;
      setProperties({
        height,
        weight,
      });
    } catch (reason) {
      console.log("error", reason);
    }
  }
  return (
    <div className="list__pokemon">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt="pokemon_img"
        className="list__pokemon_img"
      />
      <span className="list__pokemon_name">{name}</span>
      {properties === null ? (
        <button onClick={loadInfo} className="list__properties_loadInfo">
          get info
        </button>
      ) : (
        <Properties height={properties.height} weight={properties.weight} />
      )}
    </div>
  );
}

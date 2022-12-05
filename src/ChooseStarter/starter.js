import React, { useEffect, useState } from "react";
import Card from "../PokeCard/card";
import "./starter.css";
export default function Starter() {
  useEffect(() => {
    setCards()
  }, []);

  const [pokemons, setPokemons] = useState({ pokemon1: "", pokemon2: "" ,pokemon3:""});
  function random() {
    return Math.floor(Math.random() * 809 + 1);
  }
  function setCards() {
    const pokemonURL1 = `https://poke-api-f2zt.onrender.com/api/v1/pokemon/${random()}`;
    const pokemonURL2 = `https://poke-api-f2zt.onrender.com/api/v1/pokemon/${random()}`;
    const pokemonURL3 = `https://poke-api-f2zt.onrender.com/api/v1/pokemon/${random()}`;
    setPokemons({pokemon1:pokemonURL1, pokemon2:pokemonURL2 ,pokemon3:pokemonURL3})

  }
  return (
    <>
      <div className="starter_Container">
        {pokemons.map(ele => <p>{ele}</p>)}
        {/* <Card/> */}
      </div>
    </>
  );
}

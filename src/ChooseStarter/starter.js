import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StarterCard from "../PokeCard/startercard";
import "./starter.css";
export default function Starter() {


const [pokemon1, setPokemon1] = useState()
const [pokemon2, setPokemon2] = useState()
const [pokemon3, setPokemon3] = useState()

  useEffect(() => {
axios.get(`https://poke-api-f2zt.onrender.com/api/v1/pokemon/${pokeId1}`).then(data => setPokemon1(data.data))
axios.get(`https://poke-api-f2zt.onrender.com/api/v1/pokemon/${pokeId2}`).then(data => setPokemon2(data.data))
axios.get(`https://poke-api-f2zt.onrender.com/api/v1/pokemon/${pokeId3}`).then(data => setPokemon3(data.data))
  }, [])
  
  function random() {
    return Math.floor(Math.random() * 809 + 1);
  }
  //genereting the id number and storing it in variable
  const pokeId1 = random()
  const pokeId2 = random()
  const pokeId3 = random()


  return (
    <>
        <h2>Select A Companion</h2>
      <div className="starter_Container">

        <Link to={'Battle'}><StarterCard data={pokemon1}/></Link>
        <StarterCard data={pokemon2}/>
        <StarterCard data={pokemon3}/>

      </div>
    </>
  );
}

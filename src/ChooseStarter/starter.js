import axios from "axios";
import React, { useEffect, useState,useRef } from "react";
import { Link } from "react-router-dom";
import StarterCard from "./startercard";
import "./starter.css";
export default function Starter() {


const [pokemon1, setPokemon1] = useState()
const [pokemon2, setPokemon2] = useState()
const [pokemon3, setPokemon3] = useState()

  useEffect(() => {
axios.get(`https://poke-api-f2zt.onrender.com/api/v1/pokemon/${pokeId1.current}`).then(data => setPokemon1(data.data))
axios.get(`https://poke-api-f2zt.onrender.com/api/v1/pokemon/${pokeId2.current}`).then(data => setPokemon2(data.data))
axios.get(`https://poke-api-f2zt.onrender.com/api/v1/pokemon/${pokeId3.current}`).then(data => setPokemon3(data.data))
  }, [])
  
  function random() {
    return Math.floor(Math.random() * 809 + 1);
  }
  //genereting the id number and storing it in variable
  //useRef so we dont have rerenders and the  random()funktion does a new number
  const pokeId1 = useRef(random());
  const pokeId2 = useRef(random());
  const pokeId3 = useRef(random());


  return (
    <>
        <h2>Select A Companion</h2>
      <div className="starter_Container">

        <Link to={`Battle/${pokeId1.current}`}><StarterCard data={pokemon1} pokeid={pokeId1.current}/></Link>
        <Link to={`Battle/${pokeId2.current}`}><StarterCard data={pokemon2} pokeid={pokeId2.current}/></Link>
        <Link to={`Battle/${pokeId3.current}`}><StarterCard data={pokemon3} pokeid={pokeId3.current}/></Link>

      </div>
    </>
  );
}

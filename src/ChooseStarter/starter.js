import axios from "axios";
import React, { useEffect, useState } from "react";
import StarterCard from "../PokeCard/startercard";
import "./starter.css";
export default function Starter() {

  function random() {
    return Math.floor(Math.random() * 809 + 1);
  }

  return (
    <>
      <div className="starter_Container">
        <StarterCard inComeData={axios.get(`https://poke-api-f2zt.onrender.com/api/v1/pokemon/${random()}`).then(data => data.data)}/>
        <StarterCard inComeData={axios.get(`https://poke-api-f2zt.onrender.com/api/v1/pokemon/${random()}`).then(data => data.data)}/>
        <StarterCard inComeData={axios.get(`https://poke-api-f2zt.onrender.com/api/v1/pokemon/${random()}`).then(data => data.data)}/>

      </div>
    </>
  );
}

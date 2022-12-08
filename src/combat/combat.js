import axios from 'axios';
import {useState,useEffect, useRef} from 'react'
import UserCreate from '../UserCreate';
import './combat.css'
// const fs = require("fs");

// let pokemon = fs.readFileSync("../data/poke.json", "utf8");
// let pokemonlist = JSON.parse(pokemon);




export default function useCombat({id,enemy}) {
  console.log(id,enemy)
  const [pokemonlist, setData] = useState()
  const combatResult = useRef(null)
  const [roundswon,setRoundswon] = useState(0)
  // const [combatResult, setCombatResult] = useState()
useEffect(() => {
  axios.get('https://poke-api-f2zt.onrender.com/api/v1/pokemon').then(data => setData(data.data)).catch(err => console.error(err))


}, [id])

//runs only combat if roundswons increses and pokemonlist loads which is going to be 1 time
useEffect(() => {
  pokemonlist &&
  combat(id,enemy)
}, [pokemonlist,roundswon])

  //types strength and weakness

// const PokemonIndex = (p) =>
// pokemonlist &&
//   pokemonlist.findIndex((poke) => poke.id === p);

//Logic for a combat turn
function battleturn(att, deff, hp) {
  switch (true) {
    case att > deff:
      return hp - (att - deff);
    case deff > att:
      return hp - 1;
  }
}

//logic for the whole combat until somebody loses
function combat(p1, p2) {
  if(pokemonlist){
    let pok1 = pokemonlist.find(ele => ele.id == id); // needed to change it so it finds the id
    let pok2 = pokemonlist.find(ele => ele.id == enemy);
    console.log('Pok1',pok1)
    let hp1 = pok1.base.HP;
    let hp2 = pok2.base.HP;
    let att1 = pok1.base.Attack;
    let att2 = pok2.base.Attack;
    let deff1 = pok1.base.Defense;
    let deff2 = pok2.base.Defense;
    let type1 = pok1.type;
    let type2 = pok2.type;
  
    // console.log(type2);
    // // console.log(elements[pok1.type].weakness);
    // console.log(type2.length);
    // for (let i = 0; i < type2.length; i++) {
    //   console.log(elements[pok1.type].weakness.includes(String(type2[i])));
    // }
  
    for (hp1 || hp2; hp1 > 0 && hp2 > 0; 0) {
      if (pok1.base.speed > pok2.base.speed) {
        hp2 = battleturn(att1, deff2, hp2);
        hp1 = battleturn(att2, deff1, hp1);
        console.log(hp1, hp2);
      } else {
        hp1 = battleturn(att2, deff1, hp1);
        hp2 = battleturn(att1, deff2, hp2);
        console.log(hp2, hp1);
      }
    }
    if(hp1 <= 0){
      combatResult.current = `${pok2.name.english} has won `
    }else{
      combatResult.current = `${pok1.name.english} has won` 
      setRoundswon(prev => prev+1); 
    }
      console.log('name',pok1.name.english)
      console.log('name',pok2.name.english)

  }
}
//Utility Functions 
function changeNumber(num) {
  if (num.toString().length === 1) {
    return `00` + num;
  } else if (num.toString().length === 2) {
    return "0" + num;
  } else if (num.toString().length === 3) {
    return num;
  }
}
function findPokemon(thePokemonId){
  if(pokemonlist)
  return pokemonlist.find(ele => ele.id == thePokemonId)
}



if(pokemonlist)
return(
  <>
  {pokemonlist && 
  <>
  <p>enemy id = {enemy}</p>
  <div className='fight_Current'>
    <div className='fight_Pokemon'>
      <img src={`https://projectpokemon.org/images/sprites-models/normal-back/${findPokemon(id).name.english.toLowerCase()}.gif`}></img>
      <span>{findPokemon(id).name.english}</span>
    </div>
    <h2> vs </h2>
    <div className='fight_Pokemon'>
      <img src={`https://projectpokemon.org/images/normal-sprite/${findPokemon(enemy).name.english.toLowerCase()}.gif`}></img>
      <span>{findPokemon(enemy).name.english}</span>
      <span>{roundswon}</span>
    </div>
  </div>
  </>
  }
  {combatResult.current && <p>{combatResult.current}</p>}
  <UserCreate score={roundswon} pokemon={findPokemon(id)}/>
  </>
)
}


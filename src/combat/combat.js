import axios from 'axios';
import {useState,useEffect, useRef} from 'react'
import './combat.css'
// const fs = require("fs");

// let pokemon = fs.readFileSync("../data/poke.json", "utf8");
// let pokemonlist = JSON.parse(pokemon);




export default function useCombat({id,enemy}) {
  console.log(id,enemy)
  const [pokemonlist, setData] = useState()
  let [thpresult1,sethp] = useState();
  let [thpresult2, sethp2] = useState();
  let [combattext, settext] = useState();
  const combatResult = useRef(null)
  let hpnow = useRef(null)
  let hpnow2 = useRef(null)

let maxhp1 = 0;
let maxhp2 = 0;
let hp1 = 0;
    let hp2 = 0;
    let att1 = 0;
    let att2 = 0;
    let deff1 = 0;
    let deff2 = 0;
    let type1 = 0;
    let type2 = 0; 
    let speed1 = 0;
    let speed2 = 0;


  // const [combatResult, setCombatResult] = useState()
useEffect(() => {
  axios.get('https://poke-api-f2zt.onrender.com/api/v1/pokemon').then(data => setData(data.data)).catch(err => console.error(err))


}, [])



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

/*function battleturn1(att1,deff1,hp1,att2,deff2,hp2,speed1,speed2) {
      if(speed1 >= speed2) {
      switch (true) {
            case att1 > deff2:
             return  sethp2(prev => prev - (att1 - deff2));
              break;
            case deff2 > att1:
              return sethp2(prev => prev - 1);
              break;
          }
                      } else { 
            switch (true) {
                  case att2 > deff1:
                return     sethp(prev => prev - (att2 - deff1));
                     break;
                  case deff2 > att1:
                return   sethp(prev => prev- 1);
                   break;
                }}}*/


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
        if(hp2 <= 0) {break}
        hp1 = battleturn(att2, deff1, hp1);
        if(hp1 <= 0) {break}
        console.log(hp1, hp2);
      } else {
        hp1 = battleturn(att2, deff1, hp1);
        if(hp1 <= 0) {break}
        hp2 = battleturn(att1, deff2, hp2);
        if(hp2 <= 0) {break}
        console.log(hp2, hp1);
      }
    }
    hp1 <= 0
      ? combatResult.current = `${pok2.name.english} has won `
      : combatResult.current = `${pok1.name.english} has won`;
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



if(pokemonlist) {
//combat(id,enemy)
let pok1 = pokemonlist.find(ele => ele.id == id); // needed to change it so it finds the id
    let pok2 = pokemonlist.find(ele => ele.id == enemy);
    console.log('Pok1',pok1)
     hp1 = pok1.base.HP;
     hp2 = pok2.base.HP;
     att1 = pok1.base.Attack;
     att2 = pok2.base.Attack;
     deff1 = pok1.base.Defense;
     deff2 = pok2.base.Defense;
     type1 = pok1.type;
     type2 = pok2.type;
      speed1 = pok1.base.Speed;
      speed2 = pok2.base.Speed

}

hpnow.current = hp1
hpnow2.current = hp2
console.log(speed2)


return(
  <>
  {pokemonlist && 
  <>
 
  
    <div className='fight_Current'>
    <div className='fight_Pokemon1'>
      <img src={`https://projectpokemon.org/images/sprites-models/normal-back/${findPokemon(id).name.english.toLowerCase()}.gif`}></img>
      </div>
    <div className= 'namepok1'>{findPokemon(id).name.english} <span>{thpresult1 ? thpresult1 : sethp(hpnow.current)}/{findPokemon(id).base.HP} HP</span></div>
    <div className='fight_Pokemon2'>
      <img src={`https://projectpokemon.org/images/normal-sprite/${findPokemon(enemy).name.english.toLowerCase()}.gif`}></img>
     </div>
    <div className= 'namepok2'>{findPokemon(enemy).name.english} <span>{thpresult2 ? thpresult2 : sethp2(hpnow2.current)}/{findPokemon(enemy).base.HP} HP</span></div>
    <div className='panel' > <p onClick={e => { if(speed1 > speed2) {sethp2(battleturn(att1,deff2,thpresult2));settext(`Pok2 lost ${hpnow2.current - thpresult2} hp`);
     setTimeout(() => {sethp(battleturn(att2,deff1,thpresult1));settext(`Pok1 lost ${hpnow.current - thpresult1} hp`)},5000)}
     else {sethp(battleturn(att2,deff1,thpresult1));settext(`Pok1 lost ${hpnow.current - thpresult1} hp`);
     setTimeout(() =>  {sethp(battleturn(att1,deff2,thpresult2)) ;settext(`Pok2 lost ${hpnow.current - thpresult1} hp`)},5000)}}}>Attack</p>
    <p onClick={e => console.log(thpresult1,att2)}>Item </p>
    <p onClick={e => console.log(0)  }>Flee</p>
  <p>{maxhp1}</p></div> 
  </div>
  </>
  }
      <div className= 'ct'>{combattext}</div>
  {combatResult.current && <p className= 'winner'>{combatResult.current}!</p>}
    </>
)
}


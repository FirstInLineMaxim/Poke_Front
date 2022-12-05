const fs = require('fs');



let pokemon = fs.readFileSync('../data/poke.json', 'utf8')
let pokemonlist = JSON.parse(pokemon)

//types strength and weakness
const elements = {
 Normal : {
      strength: [0],
      weakness:["Rock","Ghost","Steel"] },
Fire : {
      strength: ["Grass","Ice","Steel"],
      weakness:["Fire","Water","Rock","Dragon"]},
Water : {
      strength:["Fire","Ground","Rock"],
      weakness:["Water","Grass","Dragon"] },
Electric : {
      strength:["Water","Flying"],
      weakness:["Electric","Grass","Ground","Dragon"] },
Grass : {
      strength:["Water","Ground","Rock"],
      weakness:["Fire","Grass","Poison","Flying","Bug","Dragon","Steel"] }}



 //Logic for finding the pokemon from the json     
const PokemonIndex = (p) =>  pokemonlist.findIndex((poke) =>  poke.name.english === p)

 

      //Logic for a combat turn
function battleturn(att,deff,hp) {
 switch (true) {
   case att > deff :
    return hp - (att-deff);
   case deff > att :
    return hp - 1;
            } 
        }

//logic for the whole combat until somebody loses
 function combat(p1,p2) {
let pok1 = pokemonlist[PokemonIndex(p1)]
let pok2 = pokemonlist[PokemonIndex(p2)]
let hp1 = pok1.base.HP
let hp2 = pok2.base.HP
let att1 = pok1.base.Attack
let att2 = pok2.base.Attack
let deff1 = pok1.base.Defense
let deff2 = pok2.base.Defense
let type1 = pok1.type
let type2 = pok2.type

console.log(type2)
console.log(elements[pok1.type].weakness)
console.log(type2.length)
for(let i = 0; i < type2.length; i++ ) {
console.log(elements[pok1.type].weakness.includes(String(type2[i])))}

for(hp1 || hp2; hp1 > 0 && hp2 > 0;0 ) {
if(pok1.base.speed > pok2.base.speed){
hp2 = battleturn(att1,deff2,hp2);
if(hp2 <0 ) {break} 
hp1 = battleturn(att2,deff1,hp1);
if(hp1 <= 0) {break}
console.log(hp1,hp2)
} else {
hp1 = battleturn(att2,deff1,hp1)
if(hp1 <= 0) {break}
hp2 = battleturn(att1,deff2,hp2)
if(hp2 <= 0) {break}
console.log(hp2,hp1)
}}
hp1 <= 0 ? console.log(`${pok2.name.english} has won `) : console.log(`${pok1.name.english} has won`) 
        }
    

/*console.log(pokemontobattle)*/


combat("Charmander","Squirtle")

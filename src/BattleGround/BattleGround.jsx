import React from 'react'
import { useParams } from 'react-router-dom'
import useCombat from '../combat/combat'
import '../combat/combat.css'

export default function BattleGround() {

  
    function random() {
        return Math.floor(Math.random() * 809 + 1);
      }

    let {id} = useParams()
  return (
    <>
    
    <div className='battleGround_Container'>
    <h1 className= 'title'>And now the clashing of titans! </h1>
    <h2>{useCombat({id,enemy:270})}</h2>
    </div>
     </>
  )
}

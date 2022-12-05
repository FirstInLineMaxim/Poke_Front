import React from 'react'
import { useParams } from 'react-router-dom'
import useCombat from '../combat/combat'

export default function BattleGround() {

    function random() {
        return Math.floor(Math.random() * 809 + 1);
      }

    let {id} = useParams()
  return (
    <>
    <h1>Just the Battle nothing to see here </h1>
    <p>Selected Pokemon id = {id}</p>
    <h2>{useCombat({id,enemy:random()})}</h2>
    </>
  )
}

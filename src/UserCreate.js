import axios from 'axios'
import React,{useState} from 'react'

export default function UserCreate({score,pokemon}) {
    const [username,setUsername]= useState()
    function gameEnd (e){
    e.preventDefault(); 
    axios.post('https://poke-api-f2zt.onrender.com/leaderboard/create',{score:score , username:username,pokemon:pokemon._id}).then(window.location.replace('/leaderboard'))}
  return (
    <>
    <form >
        <h2>Your Score this Round :{score}</h2>
        <input type='text' onChange={(e)=>{setUsername(e.target.value)}}placeholder="What is Your Name?" name='username'/>
        <button type='submit' onClick={(e)=> gameEnd(e)}>Submit</button>
    </form>
        </>
  )
}

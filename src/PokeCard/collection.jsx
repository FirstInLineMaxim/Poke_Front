import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import data from '../data/poke.json'
import './collection.css'
import Card from './card'

export default function Collection() {
  const [data, setData] = useState()
  useEffect(() => {
    axios.get('https://poke-api-f2zt.onrender.com/api/v1/pokemon').then(data => setData(data.data))
  }, [])


  {/* TODO: making the filter. */ }

  // const [filterType, setFilterType] = useState([])
  // function filter(value){
  //     const filtered = data.filter(ele => ele.type[0] === value || ele.type[1] === value)
  //     setFilterType(filtered)
  //     console.log(filterType)
  // }

  return (
    <>
      {/* TODO: making the filter. */}
      <div className='Cardinio'>
      <select>
        <option value="">Highest Health</option>
        <option value="">Lowest Health</option>
        <option value="">A-Z</option>
        <option value="">Z-A</option>
      </select>
      <select onClick={'(e) => filter(e.target.value)'}>
        <option value="Fire">Fire</option>
        <option value="Bug">Bug</option>
        <option value="Ground">Ground</option>
        <option value="Water">Water</option>
      </select>
        {!data && <div className="loader_spinner"></div>}
      <div className='Card_Display'>
        {data && data.map(ele => <Card data={ele} />)}
      </div>
      </div>
    </>
  )
}

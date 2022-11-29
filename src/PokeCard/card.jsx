import React from 'react'
import data from '../data/poke.json'
import './card.css'

export default function Card() {
    function changeNumber (num){
        if (num.toString().length === 1){
            return `00`+num
        }else if ( num.toString().length === 2){
            return '0'+num
        }else if(num.toString().length === 3){
            return num
        }

    }
const url = (id)=>{
                        // link options i found pokedex/ detail or full
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${changeNumber(id)}.png`
}
  return (
    <>
    {/* TODO: making the filter. */}
    <select>
        <option value="">Highest Health</option>
        <option value="">Lowest Health</option>
        <option value="">A-Z</option>
        <option value="">Z-A</option>
        </select>
        <select>
        <option value="">Fire</option>
        <option value="">Bug</option>
        <option value="">Ground</option>
        <option value="">Water</option>
        </select>
    <div className='Card_Display'>
    {data.map(ele => {return( <div key={ele.id} className='Card_Container'>

            <img src={url(ele.id)} alt={ele.name.english}/>
            {/* Description */}
            <div className='Descript_Container'>
                <p>#{changeNumber(ele.id)}</p>
                <div>
                <h3>{ele.name.english}</h3>
                <div className='Types_Container'>
                {ele.type.map((ele,i) => (<span key={i} className={ele}>{ele}</span>))}
                </div>
                </div>

            </div>

        </div>)
    })}
    </div>
    </>
  )
}

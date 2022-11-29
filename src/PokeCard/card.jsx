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

  return (
    <>
    <div className='Card_Display'>
    {data.map(ele => {return( <div className='Card_Container'>
                    {/* link options i found pokedex/ detail or full  */}
            <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${changeNumber(ele.id)}.png`} alt={ele.name.english}/>
            {/* Description */}
            <div className='Descript_Container'>
                <p>#{ele.id}</p>
                <div>
                <h3>{ele.name.english}</h3>
                <div className='Types_Container'>
                {ele.type.map(ele => (<span className={ele}>{ele}</span>))}
                </div>
                </div>

            </div>

        </div>)
    })}
    </div>
    </>
  )
}

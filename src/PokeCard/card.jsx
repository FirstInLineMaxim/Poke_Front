import React from 'react'
import data from '../data/poke.json'
import './card.css'

export default function Card() {

  return (
    <>
    <div className='Card_Display'>
    {data.map(ele => {return( <div className='Card_Container'>
            <img src="" alt=""/>
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

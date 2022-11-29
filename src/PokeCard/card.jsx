import React,{useState,useRef} from 'react'
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
    const [filterType, setFilterType] = useState([])
    // const filterType = useRef(null)
    function filter(value){
        const filtered = data.filter(ele => ele.type[0] === value || ele.type[1] === value)
        setFilterType(filtered)
        console.log(filterType)
    }

    const card = (ele) => {return( <div key={ele.id} className='Card_Container'>

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
        <select onClick={(e) => filter(e.target.value)}>
        <option value="Fire">Fire</option>
        <option value="Bug">Bug</option>
        <option value="Ground">Ground</option>
        <option value="Water">Water</option>
        </select>
    <div className='Card_Display'>
    {data.map(ele => card(ele)
    )}
    </div>
    </>
  )
}

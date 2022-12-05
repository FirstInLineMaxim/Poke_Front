import React,{useState} from 'react'
import Collection from '../PokeCard/collection'
import './hero.css'
export default function Hero() {
    const [selectScreen, setSelectScreen] = useState()
    function popup(){
        !selectScreen ? setSelectScreen(<div className='Popup'><Collection className="Collection_Hero"/></div>)
        : setSelectScreen(null)
            
        
    }
  return (
    <>
    <div className='Hero_Container'>
        {selectScreen && selectScreen }
        <button onClick={popup} className='Fight_Button'>Fight</button>
    </div>
    </>
  )
}

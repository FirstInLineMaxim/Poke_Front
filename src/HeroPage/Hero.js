import React, { useState } from "react";
import { Link } from "react-router-dom";
import Starter from "../ChooseStarter/starter";
import "./hero.css";
export default function Hero() {
  const [selectScreen, setSelectScreen] = useState();
  function popup() {
    // !selectScreen ? setSelectScreen(<div className='Popup'><Collection className="Collection_Hero"/></div>)
    // : setSelectScreen(null)
    !selectScreen
      ? setSelectScreen(
          <div className="Popup">
            <Starter />
          </div>
        )
      : setSelectScreen(null);
  }
  return (
    <>
      <div className="Hero_Container">
        {/* NAVIGATION */}
        <div className="TopNav">
          <Link className="" to="choose">
            <button className="header_btn">Pokedex</button>
          </Link>
          <Link className="" to="leaderboard">
            <button className=" header_btn">Leaderboard</button>
          </Link>
        </div>
        <button onClick={popup} className="Fight_Button">
          Fight
        </button>
        {/* SETS THE POPUPSCREEN HTML CODE IF ITS PRESENTED */}
        {selectScreen && selectScreen}
      </div>
    </>
  );
}

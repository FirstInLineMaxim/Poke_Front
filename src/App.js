import Collection from './PokeCard/collection';
import { Routes, Route } from "react-router-dom";
import Hero from './HeroPage/Hero';
import BattleGround from './BattleGround/BattleGround';
import Leaderboard from './Leaderboard/leaderboard';
function App() {
  
  return (
    <>
    <Routes>
      <Route path="Poke_Front/" element={<Hero/>}/>
      <Route path="Poke_Front/Choose" element={<Collection/>}/>
      <Route path="Poke_Front/Battle/:id" element={<BattleGround/>}/>
      <Route path="Poke_Front/leaderboard" element={<Leaderboard/>}/>
    </Routes>
    </>
  );
}

export default App;

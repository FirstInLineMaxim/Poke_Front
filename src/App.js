import Collection from './PokeCard/collection';
import { Routes, Route } from "react-router-dom";
import Hero from './HeroPage/Hero';
import BattleGround from './BattleGround/BattleGround';
import Leaderboard from './Leaderboard/leaderboard';
function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Hero/>}/>
      <Route path="/Choose" element={<Collection/>}/>
      <Route path="/Battle/:id" element={<BattleGround/>}/>
      <Route path="/leaderboard" element={<Leaderboard/>}/>
    </Routes>
    </>
  );
}

export default App;

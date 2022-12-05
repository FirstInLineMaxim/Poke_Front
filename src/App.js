import Collection from './PokeCard/collection';
import { Routes, Route } from "react-router-dom";
import Hero from './HeroPage/Hero';
import BattleGround from './BattleGround/BattleGround';
function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Hero/>}/>
      <Route path="/Choose" element={<Collection/>}/>
      <Route path="/Battle/:id" element={<BattleGround/>}/>
    </Routes>
    </>
  );
}

export default App;

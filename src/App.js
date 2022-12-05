import Collection from './PokeCard/collection';
import { Routes, Route } from "react-router-dom";
import Hero from './HeroPage/Hero';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Hero/>}/>
      <Route path="/Choose" element={<Collection/>}/>
    </Routes>
    </>
  );
}

export default App;

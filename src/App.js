import Collection from './PokeCard/collection';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Collection/>}/>
      <Route path="/Choose" element={<Collection/>}/>
    </Routes>
    </>
  );
}

export default App;

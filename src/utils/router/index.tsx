import { Route, Routes } from "react-router-dom";
import PokemonDetails from "../../pages/details";
import MyApp from "../../pages/list";

export function App() {
  return (
    <Routes>
      <Route path="/" Component={MyApp} />
      <Route path="/details" Component={PokemonDetails} />
    </Routes>
  );
}

export default App;

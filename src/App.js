import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/Inicio";
import Personaje from "./components/Personaje";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio/>}></Route>
          <Route
            path="/personajes/:id"
            element={<Personaje/>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

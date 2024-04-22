import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { Ruteo } from "./app/utilidades/rutas/Ruteo";
import Cabecera from "./app/componentes/contenedores/Cabecera";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Cabecera />

          <Ruteo />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

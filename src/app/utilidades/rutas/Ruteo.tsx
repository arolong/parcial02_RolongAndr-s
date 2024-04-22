import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../componentes/contenedores/Inicio";
import { CancionCrear } from "../../componentes/canciones/CancionCrear";
import { CancionListar } from "../../componentes/canciones/CancionListar";
import { CancionAdmin } from "../../componentes/canciones/CancionAdmin";
import { Acerca } from "../../componentes/otros/Acerca";
import { NoEncontrado } from "../../componentes/contenedores/NoEncontrado";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      {/* Cada ruta se redirige a sí misma */}
      <Route path="/cancrear" element={<CancionCrear />} />
      <Route path="/canlistar" element={<CancionListar />} />
      <Route path="/canadmin" element={<CancionAdmin />} />

      {/* La ruta "/acer" se redirige a la página "No Encontrado" */}
      <Route path="/acer" element={<NoEncontrado />} />

      {/* La ruta por defecto es la página "No Encontrado" */}
      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
};

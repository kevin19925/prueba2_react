import "./App.css";

import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./componentes/Form";
import ListaCurso from "./componentes/ListaCurso";
function App() {
  const [cursos, setCursos] = useState([
    { id: 1, nombre: "Introducción a React", nivel: "Básico", duracion: 20 },
    { id: 2, nombre: "Algoritmos Avanzados", nivel: "Avanzado", duracion: 60 },
  ]);

  const eliminar = (nombre) => {
    setCursos((prev) => prev.filter((r) => r.nombre !== nombre));
  };

  const addCurso = (nuevo) => {
    setCursos((prev) => [...prev, nuevo]);
  };
  //has las rutas de la aplicacion
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/listar"
          element={<ListaCurso cursos={cursos} eliminar={eliminar} />}
        />
        {/* <Route
          path="/restaurantes"
          element={
            <ListaRestaudantes
              restaurantes={restaurantes}
              eliminarRestaurante={eliminarRestaurante}
            />
          }
        /> */}
        <Route path="/crear" element={<Form addCurso={addCurso} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

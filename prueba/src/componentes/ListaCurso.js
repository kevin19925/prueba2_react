import Curso from "./Curso";
import React from "react";

import { useNavigate } from "react-router-dom";
const ListaCurso = ({ cursos, eliminar }) => {
  const navigate = useNavigate();

  const btnAdd = (e) => {
    e.preventDefault();
    navigate("/crear");
  };
  return (
    <div className="App">
      <button onClick={btnAdd}>Agregar Curso</button>
      <h2>Lista de Cursos</h2>
      <ul>
        {cursos.map((curso, index) => (
          <li key={index}>
            <Curso
              nombre={curso.nombre}
              nivel={curso.nivel}
              duracion={curso.duracion}
              onEliminar={() => eliminar(curso.nombre)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaCurso;

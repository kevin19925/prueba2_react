import React from "react";
import "./Curso.css";

function Curso(props) {
  return (
    <div className="curso">
      <h2> nombre : {props.nombre}</h2>
      <h2> nivel : {props.nivel}</h2>

      <h2> duracion : {props.duracion}</h2>

      <button onClick={props.onEliminar}>Eliminar</button>
    </div>
  );
}

export default Curso;

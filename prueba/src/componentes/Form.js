import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Form = (props) => {
  const navigate = useNavigate();

  const btnlista = (e) => {
    e.preventDefault();
    navigate("/listar");
  };

  const [state, setState] = useState({
    nombre: "",
    nivel: "",
    duracion: 0,
  });
  const [nameTitle, setNameTitle] = useState("");
  const [levelTitle, setLevelTitle] = useState("");
  const [duracionTitle, setDuracioTitle] = useState("");

  const registerHandler = (e) => {
    e.preventDefault();
    props.addCurso(state);
     navigate("/listar");
  };

  const handleName = (e) => {
    setState({ ...state, nombre: e.target.value });
    if (state.nombre.length < 5) {
      setNameTitle("debe tener almenos 5 caracteres");
    } else {
      setNameTitle("");
    }
  };

  const handleLevel = (e) => {
    setState({ ...state, nivel: e.target.value });
    // Validar que seleccione un nivel
    if (e.target.value === "") {
      setLevelTitle("debe seleccionar un nivel");
    } else {
      setLevelTitle("");
    }
  };

  const handlDuracion = (e) => {
    const value = Number(e.target.value);
    setState({ ...state, duracion: value });
    if (value < 10 || value > 100) {
      setDuracioTitle("La duración debe estar entre 10 y 100");
    } else {
      setDuracioTitle("");
    }
  };

  return (
    <form onSubmit={registerHandler}>
      <button onClick={btnlista}>Lista de Cursos</button>
      <div className="input">
        <label htmlFor="Nombre">Nombre: </label>
        <input
          type="text"
          name="Nombre"
          size={30}
          onChange={handleName}
          value={state.nombre}
        />
        {<p style={{ color: "red" }}> {nameTitle}</p>}
      </div>

      <div className="input">
        <label htmlFor="level">Nivel: </label>
        <select name="level" onChange={handleLevel} value={state.nivel || ""}>
          <option value="">Seleccione un nivel</option>
          <option value="basico">Básico</option>
          <option value="intermedio">Intermedio</option>
          <option value="avanzado">Avanzado</option>
        </select>
        {<p style={{ color: "red" }}>{levelTitle}</p>}
      </div>

      <div className="input">
        <label htmlFor="duracion">Duración: </label>
        <input
          type="number"
          name="duracion"
          min="0"
          onChange={handlDuracion}
          value={state.duracion || ""}
        />
        <p style={{ color: "red" }}>{duracionTitle}</p>
      </div>

      <input type="submit" value="Register" />
    </form>
  );
};

export default Form;

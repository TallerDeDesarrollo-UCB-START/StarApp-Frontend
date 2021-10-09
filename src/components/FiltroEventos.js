import React from "react";

const FiltroEventos = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="">
      <div className="">
        <label>Categoría</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="Todas">Todas</option>
          <option value="Entretenimiento">Entretenimiento</option>
        </select>
      </div>
    </div>
  );
};

export default FiltroEventos;

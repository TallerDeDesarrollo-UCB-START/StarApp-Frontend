import axios from "axios";
import React, { useState } from "react";
import _ from "lodash";
import { render } from "react-dom";

const api = axios.create({
  baseURL: `http://localhost:5000/categorias`,
  //baseURL: `https://5fc44b7b36bc7900163436cf.mockapi.io/api/Message/Eventos`
});

const FiltroEventos = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
    getCategorias();
  };

  const [categorias, setCategorias] = useState({
    categorias: [],
  });
  const getCategorias = async () => {
    console.log("entra");
    let data = await api.get("/").then(({ data }) => data);
    console.log("TYPEOF DATA", typeof data);
    setCategorias({ categorias: data });
    console.log("CATEGORIAS", categorias);
  };

  return (
    <div className="">
      <div className="">
        <label>Categoría</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          {/* {this.categorias.map(({ interes }, index) => (
            <option value={interes}>{interes}</option>
          ))} */}
          <option value="Todas">Todas</option>
          <option value="Entretenimiento">Entretenimiento</option>
        </select>
      </div>
    </div>
  );
};

export default FiltroEventos;

import * as React from "react";
import TextField from "@mui/material/TextField";

export default function MyInputText({label, name, className, value, onChange, placeholder=""}) {
    return (
        <>
        <TextField
              label={label}
              name={name}
              className={className}
              type="text"
              value={value}
              onChange={onChange}
              placeholder={placeholder}
        />
        </>
    );
}

{/* <TextField
    label="Nombre del evento *"
    name="nombre_evento"
    className="nombreEventoEdicion textInput"
    type="text"
    value={this.state.formEditado["nombre_evento"]}
    onChange={this.handleChange}
/>
<TextField
    label="Lugar"
    className="LugarEventoEdicion textInput"
    name="lugar_evento"
    type="text"
    value={this.state.formEditado["lugar_evento"]}
    onChange={this.handleChange}
/> */}
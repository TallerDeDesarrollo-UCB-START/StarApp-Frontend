import React from "react";
import {
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  OutlinedInput,
  FormControl,
  MenuItem,
  FormGroup,
  Checkbox,
} from "@material-ui/core";
import { fields } from "./SearchByField";
import MaskedInput from "react-text-mask";
import MySelect from "../select";
import MySwitch from "../switch";

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        "(",
        "+",
        /\d/,
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}

export function InputByCriteria({
  criteria,
  newValue,
  setNewValue,
  insignias,
  setInsignias,
  todasInsignias,
}) {
  const rehusableTextField = () => (
    <TextField
      color="primary"
      label={criteria}
      variant="outlined"
      value={newValue[fields[criteria]] ? newValue[fields[criteria]] : ""}
      onChange={(event) =>
        setNewValue({ ...newValue, [fields[criteria]]: event.target.value })
      }
    />
  );
  const inputsByFields = {
    Rol: (
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="position"
          name="position"
          defaultValue={newValue.rol}
          onChange={(event) =>
            setNewValue({ ...newValue, [fields[criteria]]: event.target.value })
          }
        >
          <FormControlLabel
            key="Voluntario"
            value="voluntario"
            control={<Radio color="primary" />}
            label="Voluntario"
            labelPlacement="end"
          />
          <FormControlLabel
            key="Lider"
            value="lider"
            control={<Radio color="primary" />}
            label="Líder"
            labelPlacement="end"
          />
          <FormControlLabel
            key="Core"
            value="core team"
            control={<Radio color="primary" />}
            label="Core Team"
            labelPlacement="end"
          />
        </RadioGroup>
      </FormControl>
    ),
    Nombre: rehusableTextField(),
    Apellido: rehusableTextField(),
    Edad: rehusableTextField(),
    Teléfono: (
      <OutlinedInput
        value={newValue[fields[criteria]]}
        style={{
          margin: "0 10px",
          height: "45px",
        }}
        onChange={(event) =>
          setNewValue({ ...newValue, [fields[criteria]]: event.target.value })
        }
        name="phone"
        id="phone-input-users"
        size="small"
        inputComponent={TextMaskCustom}
      />
    ),
    Género: (
      <MySelect
        value={newValue[fields[criteria]]}
        onChange={(event) =>
          setNewValue({ ...newValue, [fields[criteria]]: event.target.value })
        }
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem key="Masculino" value={"Masculino"}>
          Masculino
        </MenuItem>
        <MenuItem key="Femenino" value={"Femenino"}>
          Femenino
        </MenuItem>
        <MenuItem key="Otro" value={"Otro"}>
          Otro
        </MenuItem>
        <MenuItem key="Prefiero" value={"Prefiero no decirlo"}>
          Prefiero no decirlo
        </MenuItem>
      </MySelect>
    ),
    Ocupación: (
      <MySelect
        value={newValue[fields[criteria]]}
        onChange={(event) =>
          setNewValue({ ...newValue, [fields[criteria]]: event.target.value })
        }
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem key="Colegio" value={"Colegio"}>
          Colegio
        </MenuItem>
        <MenuItem key="Universidad" value={"Universidad"}>
          Universidad
        </MenuItem>
        <MenuItem key="Trabajando" value={"Trabajando"}>
          Trabajando
        </MenuItem>
      </MySelect>
    ),
    Carrera: rehusableTextField(),
    "Ciudad de Residencia": rehusableTextField(),
    "Pais de Residencia": rehusableTextField(),
    "Persona de Contacto": rehusableTextField(),
    "Relación con Contacto": rehusableTextField(),
    "Número de contacto": rehusableTextField(),
    Disponibilidad: (
      <MySwitch 
        checked={newValue[fields[criteria]] === "disponible"} 
        onClick={
          (event) =>
              setNewValue({
                ...newValue,
                [fields[criteria]]: event.target.checked
                  ? "disponible"
                  : "no disponible",
              })
        }/> 
    ),
    Insignias: (
      <FormControl>
        <FormGroup>
          {todasInsignias.map((insignia) => {
            return (
              <FormControlLabel
                key={insignia.insignia}
                control={
                  <Checkbox
                    checked={(insignias.includes(insignia.insignia))}
                    onChange={()=>{
                      if(! insignias.includes(insignia.insignia)){
                        setInsignias([...insignias, insignia.insignia])
                      }else{
                        setInsignias(insignias.filter((i) => i!==insignia.insignia))
                      }
                    }}
                    name="insignia.insignia"
                  />
                }
                label={insignia.insignia}
              />
            );
          })}
        </FormGroup>
      </FormControl>
    ),
  };
  return <>{inputsByFields[criteria]}</>;
}

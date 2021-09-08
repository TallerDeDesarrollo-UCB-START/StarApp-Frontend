import React, { Fragment, useState } from "react";
import { Button, TextField, Checkbox, FormControlLabel, Grid} from "@material-ui/core";

function Formulario({enviar, validador, termosDeUso}) {
  const [name, setName] = useState("");
  const [lastName, setSobreome] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [checkBox, setCheckBox] = useState("");
  const [errorname, setErro] = useState({ name: { valido: true, texto: "" } });
  const [errorLastName, setErroLastName] = useState({
    lastName: { valido: true, texto: "" },
  });
  const [errorEmail, setErroEmail] = useState({
    email: { valido: true, texto: "" },
  });
  const [errorAge, setErroage] = useState({
    age: { valido: true, texto: "" },
  });
  // const [errorCheckBox, setErroCheckBox]= useState({
  //   checkBox:{valido: true, texto: "" }, 
  // });
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        enviar({ name, lastName, email, age, checkBox });
      }}
      
    >
      <Fragment>
        <TextField
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          onBlur={(event) => {
            const validar = validador(name);
            setErro({ name: validar });
          }}
          error={!errorname.name.valido}
          helperText={errorname.name.texto}
          margin="normal"
          id="name"
          label="name"
          variant="outlined"
          fullWidth
        />
        <TextField
          value={lastName}
          onChange={(event) => {
            setSobreome(event.target.value);
          }}
          onBlur={(event) => {
            const validar = validador(lastName);
            setErroLastName({ lastName: validar });
          }}
          error={!errorLastName.lastName.valido}
          helperText={errorLastName.lastName.texto}
          margin="normal"
          id="lastName"
          label="lastName"
          variant="outlined"
          fullWidth
        />
        <TextField
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          onBlur={(event) => {
            const validar = validador(email);
            setErroEmail({ email: validar });
          }}
          error={!errorEmail.email.valido}
          helperText={errorEmail.email.texto}
          margin="normal"
          id="email"
          label="E-mail"
          variant="outlined"
          fullWidth
        />
        <TextField
          value={age}
          onChange={(event) => {
            setAge(event.target.value);
          }}
          onBlur={(event) => {
            const validar = validador(age);
            setErroage({ age: validar });
          }}
          error={!errorAge.age.valido}
          helperText={errorAge.age.texto}
          margin="normal"
          id="age"
          label="age"
          variant="outlined"
          fullWidth
        />

        <Grid container direction="row" justifyContent="space-between">
          <FormControlLabel
            id="checkBox"
            margin="normal"
            label="esta seguro de cambiar sus datos"
            
            control={
              <Checkbox
              
                color="primary"
                value={checkBox}
                onChange={(event) => {
                  setCheckBox(event.target.checked);
                }}
                // onClick={(event) => {
                //   const validar = termosDeUso(checkBox);
                //   setErroCheckBox({ checkBox: validar });
                // }}
                // error={!errorCheckBox.checkBox.valido}
                // helperText={errorCheckBox.checkBox.texto} 
                 
              />
            }
          />
            <Button type="submit" variant="outlined" color="primary">
                Guardar
            </Button>
            <Button type="submit" variant="outlined" color="primary">
                Cancelar
            </Button>
        </Grid>
      </Fragment>
    </form>
  );
}

export default Formulario;
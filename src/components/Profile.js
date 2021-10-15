import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Button, Modal } from "@material-ui/core";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import "./Profile.css";
import Grid from "@material-ui/core/Grid";
import ProfileCard from "./ProfileCard";
import ProfileImage from "./ProfileImage";

// const volunteer = {
//   id: "1",
//   name: "Juanito",
// };

const url = process.env.REACT_APP_API;
const urlTablaExtensa = `${url}extended_form/`;
//const urlTablaExtensa = "http://localhost:5000/extended_form/";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    "@media (maxWidth: 375px)": {
      top: 0,
      left: 0,
    },
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const CancelButton = withStyles((theme) => ({
  root: {
    color: "white",
    backgroundColor: "#a8a8a8",
    "&:hover": {
      backgroundColor: "#818181",
    },
  },
}))(Button);
const useStyles = makeStyles((theme) => ({
  containerbuttons: {
    display: "flex",
    justifyContent: "center",
  },
  buttons: {
    width: "36%",
    height: "30px",
    margin: "7px",
  },
  intputextaera: {
    width: "76%",
    height: "100px",
    background: "#FFFFFF",
    border: "1px solid #C4C4C4",
    boxSizing: "border-box",
    borderRadius: "6px",
    padding: "3px 5px",
    margin: "7px 0px 7px 0px",
    position: "relative",
    left: "12%",
    resize: "none",
  },
  intputs: {
    width: "76%",
    height: "38px",
    background: "#FFFFFF",
    border: "1px solid #C4C4C4",
    boxSizing: "border-box",
    borderRadius: "6px",
    padding: "3px 5px",
    margin: "7px 0px 7px 0px",
    position: "relative",
    left: "12%",
  },
  checkintereses: {
    width: "76%",
    padding: "3px 5px",
    margin: "7px 0px 7px 0px",
    position: "relative",
    left: "12%",
  },
  titulos: {
    width: "76%",
    position: "relative",

    left: "12%",
  },
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Profile = (onClick) => {
  const [userExist, setUserExsit] = useState({
    userEx: false,
  });

  const [datos, setDatos] = useState({
    id_usuario: "",
    nombre: "",
    apellido: "",
    fecha_de_nacimiento: "",
    pais_de_recidencia: "",
    ciudad_de_recidencia: "",
    carrera: "",
    nivel_de_estudios: "",
    ocupacion: "",
    telefono: "",
    genero: "",
    estado_de_cuenta: "",
    rol: "",
    intereses: [],
    id_autenticacion: "",
    nombre_contacto_de_emergencia: "",
    numero_contacto_de_emergencia: "",
    relacion_contacto_de_emergencia: "",
  });
  const [datosEdit, setDatosEdit] = useState({
    id_usuario: "",
    nombre: "",
    apellido: "",
    fecha_de_nacimiento: "",
    pais_de_recidencia: "",
    ciudad_de_recidencia: "",
    nivel_de_estudios: "",
    ocupacion: "",
    telefono: "",
    genero: "",
    estado_de_cuenta: "",
    rol: "",
    intereses: [],
    id_autenticacion: "",
    nombre_contacto_de_emergencia: "",
    numero_contacto_de_emergencia: "",
    relacion_contacto_de_emergencia: "",
  });
  const handleChange = (event) => {
    var nuevosInt = "";
    const tikeado = !event.target.checked;

    if (typeof datosEdit.intereses === typeof "string") {
      if (tikeado) {
        nuevosInt = datosEdit.intereses
          .split(/[,"}{]/)
          .filter(Boolean)
          .filter((i) => i !== event.target.value);
      } else {
        nuevosInt = datosEdit.intereses
          .split(/[,"}{]/)
          .filter(Boolean)
          .concat(event.target.value);
      }
    } else {
      if (tikeado) {
        nuevosInt = datosEdit.intereses.filter((i) => i !== event.target.value);
      } else {
        const aux = datosEdit.intereses;
        aux.push(event.target.value);
        nuevosInt = aux;
      }
    }

    setDatosEdit({ ...datosEdit, [event.target.name]: nuevosInt });
  };

  const handleInputChange = (event) => {
    setDatosEdit({
      ...datosEdit,
      [event.target.name]: event.target.value,
    });
  };
  var peticionPost = async (asignaciones) => {
    await axios
      .post(urlTablaExtensa, asignaciones)
      .then((response) => {
        alert("actualizado correctamente");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  var peticionPut = (asignaciones) => {
    axios
      .put(urlTablaExtensa + datos.id_usuario, asignaciones)
      .then((response) => {
        alert("actualizado correctamente");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  function sendForm() {
    setDatos(datosEdit);

    const asignaciones = {
      nombre: datosEdit.nombre,
      apellido: datosEdit.apellido,
      fecha_de_nacimiento: datosEdit.fecha_de_nacimiento,
      pais_de_recidencia: datosEdit.pais_de_recidencia,
      ciudad_de_recidencia: datosEdit.ciudad_de_recidencia,
      carrera: datosEdit.carrera,
      ocupacion: datosEdit.ocupacion,
      descripcion_personal: datosEdit.descripcion_personal,
      telefono: datosEdit.telefono,
      genero: datosEdit.genero,
      estado_de_cuenta: datosEdit.estado_de_cuenta,
      rol: datosEdit.rol,
      intereses: datosEdit.intereses.toString(),
      id_autenticacion: datosEdit.id_autenticacion,
      nombre_contacto_de_emergencia: datosEdit.nombre_contacto_de_emergencia,
      numero_contacto_de_emergencia: datosEdit.numero_contacto_de_emergencia,
      relacion_contacto_de_emergencia:
        datosEdit.relacion_contacto_de_emergencia,
    };

    if (userExist.userEx) {
      peticionPut(asignaciones);
      setOpen(false);
    } else {
      peticionPost(asignaciones);
      setOpen(false);
    }
  }

  function removeNulls(model) {
    for (var value of Object.keys(model)) {
      model[value] = model[value] ? model[value] : "";
    }
    return model;
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps

    const idsessionstorage = sessionStorage.getItem("id");
    const responseAutenticacion = {
      id_autenticacion: idsessionstorage, // descomentanto esta linea y eliminando la linea de abajo deberia recuperar los datos del logueado
      //  id_autenticacion: "1",
    };

    axios
      .get(urlTablaExtensa + responseAutenticacion.id_autenticacion)
      .then((response) => {
        if (response.data.data) {
          setUserExsit({ userEx: true });
          setDatos({ ...removeNulls(response.data.data) });
          setDatosEdit({ ...removeNulls(response.data.data) });
        } else {
          setUserExsit({ userEx: false });
        }
      });
  }, [datos.id]);

  const location = useLocation();
  const classNamees = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setDatosEdit(datos);
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className="paperr">
      <div>
        <form className="fomrExt">
          <label className={classNamees.titulos} htmlFor="nombre">
            Nombre:
          </label>
          <input
            className={classNamees.intputs}
            value={datosEdit.nombre}
            onChange={handleInputChange}
            placeholder="Nombre"
            name="nombre"
            id="nombre"
            type="text"
          />
          <br></br>
          <label className={classNamees.titulos} htmlFor="apellido">
            Apellido:
          </label>
          <input
            className={classNamees.intputs}
            value={datosEdit.apellido}
            onChange={handleInputChange}
            placeholder="Apellido"
            name="apellido"
            id="apellido"
            type="text"
          />
          <br></br>
          <label className={classNamees.titulos} htmlFor="fecha_de_nacimiento">
            Fecha de nacimiento:
          </label>
          <input
            className={classNamees.intputs}
            type="date"
            name="fecha_de_nacimiento"
            value={datosEdit.fecha_de_nacimiento.split("T")[0]}
            onChange={handleInputChange}
          />

          <label className={classNamees.titulos} htmlFor="ocupacion">
            Ocupación:
          </label>
          <select
            name="ocupacion"
            value={datosEdit.ocupacion}
            onChange={handleInputChange}
            className={classNamees.intputs}
          >
            <option value="Colegio">Colegio</option>
            <option value="Universidad">Universidad</option>
            <option value="Trabajando">Trabajando</option>
          </select>

          <label className={classNamees.titulos} htmlFor="carrera">
            Profesión u oficio:
          </label>
          <input
            className={classNamees.intputs}
            value={datosEdit.carrera}
            onChange={handleInputChange}
            placeholder="Profecion u Oficio"
            name="carrera"
            id="carrera"
            type="text"
          />
          <br></br>
          <label className={classNamees.titulos}>Mis intereses:</label>
          <br></br>
          <div className={classNamees.checkintereses}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <input
                  checked={datosEdit.intereses.includes("Medio ambiente")}
                  onChange={handleChange}
                  value="Medio ambiente"
                  name="intereses"
                  id="MedioambienteCheck"
                  type="checkbox"
                />
                <label htmlFor="MedioambienteCheck">Medio ambiente</label>
              </Grid>
              <Grid item xs={12}>
                <input
                  checked={datosEdit.intereses.includes(
                    "Desarrollo sostenible"
                  )}
                  onChange={handleChange}
                  value="Desarrollo sostenible"
                  name="intereses"
                  id="DesarrollosostenibleCheck"
                  type="checkbox"
                />
                <label htmlFor="DesarrollosostenibleCheck">
                  Desarrollo sostenible
                </label>
              </Grid>
              <Grid item xs={12}>
                <input
                  checked={datosEdit.intereses.includes("Trabajo social")}
                  onChange={handleChange}
                  value="Trabajo social"
                  name="intereses"
                  id="TrabajosocialCheck"
                  type="checkbox"
                />
                <label htmlFor="TrabajosocialCheck">Trabajo social</label>
              </Grid>
              <Grid item xs={12}>
                <input
                  checked={datosEdit.intereses.includes("Empoderamiento")}
                  onChange={handleChange}
                  value="Empoderamiento"
                  name="intereses"
                  id="EmpoderamientoCheck"
                  type="checkbox"
                />
                <label htmlFor="EmpoderamientoCheck">Empoderamiento</label>
              </Grid>
              <Grid item xs={12}>
                <input
                  checked={datosEdit.intereses.includes("Perritos callejeros")}
                  onChange={handleChange}
                  value="Perritos callejeros"
                  name="intereses"
                  id="PerritoscallejerosCheck"
                  type="checkbox"
                />
                <label htmlFor="PerritoscallejerosCheck">
                  Perritos callejeros
                </label>
              </Grid>
              <Grid item xs={12}>
                <input
                  checked={datosEdit.intereses.includes("Educacion")}
                  onChange={handleChange}
                  value="Educacion"
                  name="intereses"
                  id="EducacionCheck"
                  type="checkbox"
                />
                <label htmlFor="EducacionCheck">Educación</label>
              </Grid>
            </Grid>
          </div>

          <label className={classNamees.titulos} htmlFor="pais_de_recidencia">
            Pais de residencia:
          </label>
          <input
            className={classNamees.intputs}
            value={datosEdit.pais_de_recidencia}
            onChange={handleInputChange}
            placeholder="Pais de recidencia"
            name="pais_de_recidencia"
            id="pais_de_recidencia"
            type="text"
          />
          <br></br>

          <label className={classNamees.titulos} htmlFor="ciudad_de_recidencia">
            Ciudad de residencia:
          </label>
          <input
            className={classNamees.intputs}
            value={datosEdit.ciudad_de_recidencia}
            onChange={handleInputChange}
            placeholder="Ciudad de recidencia"
            name="ciudad_de_recidencia"
            id="ciudad_de_recidencia"
            type="text"
          />
          <br></br>
          <label className={classNamees.titulos} htmlFor="telefono">
            Teléfono:
          </label>
          <input
            className={classNamees.intputs}
            value={datosEdit.telefono}
            onChange={handleInputChange}
            placeholder="Telefono
                    "
            name="telefono"
            id="telefono"
            type="text"
          />
          <br></br>

          <label className={classNamees.titulos} htmlFor="genero">
            Género:
          </label>
          <select
            name="genero"
            value={datosEdit.genero}
            onChange={handleInputChange}
            className={classNamees.intputs}
          >
            <option value="">Género</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Otro">Otro</option>
            <option value="Prefiero no decirlo">Prefiero no decirlo</option>
          </select>

          <label
            className={classNamees.titulos}
            htmlFor="nombre_contacto_de_emergencia"
          >
            Nombre de contacto de emergencia:
          </label>
          <input
            className={classNamees.intputs}
            value={datosEdit.nombre_contacto_de_emergencia}
            onChange={handleInputChange}
            placeholder="Nombre de contacto de emergencia"
            name="nombre_contacto_de_emergencia"
            id="nombre_contacto_de_emergencia"
            type="text"
          />
          <label
            className={classNamees.titulos}
            htmlFor="relacion_contacto_de_emergencia"
          >
            Relación con contacto de emergencia:
          </label>
          <input
            className={classNamees.intputs}
            value={datosEdit.relacion_contacto_de_emergencia}
            onChange={handleInputChange}
            placeholder="Relación de contacto de emergencia"
            name="relacion_contacto_de_emergencia"
            id="relacion_contacto_de_emergencia"
            type="text"
          />
          <label
            className={classNamees.titulos}
            htmlFor="numero_contacto_de_emergencia"
          >
            Número de contacto de emergencia:
          </label>
          <input
            className={classNamees.intputs}
            value={datosEdit.numero_contacto_de_emergencia}
            onChange={handleInputChange}
            placeholder="Número de contacto de emergencia"
            name="numero_contacto_de_emergencia"
            id="numero_contacto_de_emergencia"
            type="text"
          />
          <br></br>

          <label className={classNamees.titulos} htmlFor="descripcion_personal">
            Mi pequeña descripción:
          </label>
          <textarea
            className={classNamees.intputextaera}
            value={datosEdit.descripcion_personal}
            onChange={handleInputChange}
            name="descripcion_personal"
            id="descripcion_personal"
          ></textarea>
          <br></br>
        </form>
      </div>
      <div className={classNamees.containerbuttons}>
        <Button
          onClick={sendForm}
          color="primary"
          className={classNamees.buttons}
          variant="contained"
          borderradius="20%"
        >
          Guardar
        </Button>
        <CancelButton
          variant="contained"
          onClick={handleClose}
          className={classNamees.buttons}
          color="primary"
        >
          Cancelar
        </CancelButton>
      </div>
    </div>
  );

  return (
    <div>
      {location.pathname === "/" && <Link to="/profile">Perfil</Link>}
      <div>
        {location.pathname !== "/" && (
          <div className={classNamees.name}>
            <ProfileImage getDataProfile={datosEdit} setDataProfile={setDatosEdit} />
            <ProfileCard getDataProfile={datosEdit} handleOpenprop={handleOpen}/>
            
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-descripcion_personal"
            >
              {body}
            </Modal>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;

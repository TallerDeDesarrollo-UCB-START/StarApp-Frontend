import { makeStyles } from '@material-ui/core/styles'
import React, { useState, useEffect  } from "react";
import axios from "axios";
import ErrorIcon from '@material-ui/icons/Error';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import routes from "../routes/Routes";
const url = process.env.REACT_APP_API;
const urlTablaExtensa = `${url}extended_form/`;

const useStyles = makeStyles(theme => ({
    recordatorioStyle: {
        position:"absolute",
        bottom:"5%",
        left:"37%",        
        background:"#F2F2F2",
        borderRadius:"10px",
        width:"26%",
        height:"40px",
        display: 'flex',
        alignItems: 'center',  
        "@media (max-Width: 375px)": {
            width:"90%",
            left:"5%",
        }     
    },
    marginRL5:{
        marginLeft:"10px",
        marginRight:"10px"
    },
    closeIco:{
        marginLeft:"auto",  
    }
    
}))
const RecordatorioLlenarDatos=()=>{
    const classes = useStyles()
    const history = useHistory();
    const [open, setOpen] = React.useState(true);
    const islogged=Boolean(sessionStorage.getItem("jwt"))
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
        cualidades: [],
        aptitudes_tecnicas:[],
        id_autenticacion: "",
        nombre_contacto_de_emergencia: "",
        numero_contacto_de_emergencia: "",
        relacion_contacto_de_emergencia: "",
      });
    function removeNulls(model) {
        for (var value of Object.keys(model)) {
          model[value] = model[value] ? model[value] : "";
        }
        return model;
    }
    function existEmptyiFields(model){    
        var res=false    
        for (var value of Object.keys(model)) {
            if(model[value] ===""){ res=true; break;} 
        }
        return res;
    }   
    const handleClose = () => { setOpen(false);};
    useEffect(() => {
        const idsessionstorage = sessionStorage.getItem("id");
        const responseAutenticacion = { id_autenticacion: idsessionstorage};
        axios
          .get(urlTablaExtensa + responseAutenticacion.id_autenticacion)
          .then((response) => {
            if (response.data.data) {  setDatos({ ...removeNulls(response.data.data) });}});
      }, [datos.id]);
     
    if(existEmptyiFields(datos)&&islogged&&open)
    {   return(  
            <div className = {classes.recordatorioStyle}>
                <ErrorIcon className = {classes.marginRL5} color="error"/>
                <span>Completa tus datos</span>
                <Button className = {classes.closeIco} color="inherit" size="small" 
                    onClick={() => history.push(islogged ? routes[3].path : routes[4].path)}> go  </Button>
                <IconButton className = {classes.closeIco} size="small" aria-label="close" color="inherit" onClick={handleClose}>
                    <CloseIcon fontSize="small" />
                </IconButton>
            </div>        
        )
    }
    else{ return(null) }
}
export default RecordatorioLlenarDatos;



import React, { useState, useEffect  } from "react";
import axios from "axios";
import ErrorIcon from '@material-ui/icons/Error';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import routes from "../../routes/Routes";
import useStyles from "./FillDataReminder.styles";

const url = process.env.REACT_APP_API;
const urlTablaExtensa = `${url}extended_form/`;

const FillDataReminder=()=>{
	const classes = useStyles()
	const history = useHistory();
	const islogged = Boolean(sessionStorage.getItem("jwt"));

	const [open, setOpen] = useState(false);
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
		var aux=Object.assign({} , model)  
		var res=false   
		delete aux['horas_participadas_eventos'];        
		for (var value of Object.keys(aux)) {
			if(aux[value].length===0){ res=true; break;} 
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
				if (response.data.data) {  
					setDatos({ ...removeNulls(response.data.data) });
					setOpen(existEmptyiFields({...removeNulls(response.data.data) })&&islogged)
				}});
		
	}, [datos.id, islogged]);
		
	return(
		<>
			{open && (
				<div className ={classes.recordatorioStyle}>
					<ErrorIcon className = {classes.marginRL5} color="error"/>
					<span>Completa tus datos</span>
					<Button className = {classes.closeIco} color="inherit" size="small" 
						onClick={() => history.push(islogged ? routes[3].path : routes[4].path)}> completar  </Button>
					<IconButton className = {classes.closeIco} size="small" aria-label="close" color="inherit" onClick={handleClose}>
						<CloseIcon fontSize="small" />
					</IconButton>
				</div>
			)}
		</>
	)
}
export default FillDataReminder;



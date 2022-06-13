import React, { useState, useEffect} from "react";
import { MenuItem, Typography } from "@material-ui/core";
import {
	getLeaders,
	getCategories,
	getProjects,
	createEvent,
	updateEventById
} from "../../../api/rename/renameAPI";
import { useHistory } from "react-router-dom";
import MyButton from "../../../components/button";
import MySelect from "../../../components/select";
import MyTextField from "../../../components/textField";
import MyTimePicker from "../../../components/timePicker/TimePicker";
import MyDatePicker from "../../../components/datePicker/DatePicker";
import { getIdFromURL } from "../../../utils/Url.util"
import { useForm, FormProvider } from "react-hook-form";
import BadRequests from "../../../components/redirect status/BadRequests";
import RedirectErrorPage from "../../../components/redirect status/RedirectErrorPage";
import SnackbarMessage from "../../../components/templates/SnackbarMessage";
const EventForm = ({ isEditMode, event }) => {
	const history = useHistory();
	const [leaders, setLeaders] = useState([]);
	const [categories, setCategories] = useState([]);
	const [projects, setProjects] = useState([]);
	const methods = useForm();
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [leader, setLeader] = useState("");
	const [mode, setMode] = useState("");
	const [location, setLocation] = useState("");
	const [category, setCategory] = useState("");
	const [project, setProject] = useState("");
	const [date, setDate] = useState(null);
	const [startTime, setStartTime] = useState(null);
	const [endTime, setEndTime] = useState(null);
	const [snackbar, setSnackbar] = useState({
		message: "",
		active: false,
		severity: "success",
		afterClose:()=>{console.log("despues del mensaje");},
	  });
	const activeSnackbar = (message, severity, afterClose) => {
		setSnackbar({ message, severity, afterClose, active: true });
	  };
	useEffect(async () => {
		if(isEditMode) {
			setEditMode();	
		}
		try{
			await callGetLeaders();
			await callGetCategories();
			await callGetProjects();
		}catch(error)
		{
			console.log(error);
			if (error.message == "Network Error"){
				RedirectErrorPage(500,history,"Hubo un error en la conexión con los datos.")
				return;
			}
			let message = BadRequests(404);
        	activeSnackbar("No se pudo recuperar los datos del evento, "+message, "error");
			console.log(error);
		}
	}, []);

	function getModalStyle() {
        return {
			display:"flex",
			flexDirection:"column", 
			rowGap: "10px",
			alignSelf:"center",
			alignItems: "stretch",
			width:"90%"
        };
    }
	const [modalStyle] = React.useState(getModalStyle);
	function setEditMode() {
		console.log(event);
		if(event.nombre_evento) {
			setName(event.nombre_evento);
		}
		if(event.descripcion_evento) {
			setDescription(event.descripcion_evento);
		}
		if(event.lider) {
			setLeader(event.lider);
		}
		if(event.modalidad_evento) {
			setMode(event.modalidad_evento);
		}
		if(event.lugar_evento) {
			setLocation(event.lugar_evento);
		}
		if(event.categoria) {
			setCategory(event.categoria);
		}
		if(event.proyecto) {
			setProject(event.proyecto);
		}
		if(event.fecha_evento) {
			setDate(event.fecha_evento);
		}
		if(event.hora_inicio) {
			setStartTime(event.hora_inicio);
		}
		if(event.hora_fin) {
			setEndTime(event.hora_fin);
		}
	}

	const callGetLeaders = async () => {
		try{
			const response = await getLeaders();
			const leaderNames = response.data.map((leader) => leader.nombre + " " + leader.apellido);
			leaderNames.unshift("Sin Asignar");
			setLeaders(leaderNames);
		}catch(error)
		{
			console.log(error);
			throw error;
		}
	}

	const callGetCategories = async () => {
		try{
			const response = await getCategories();
			const categoryNames = response.data.map((category) => category.interes);
			setCategories(categoryNames);
		}catch(error)
		{
			console.log(error);
			throw error;
		}
	}

	const callGetProjects = async () => {
		try{
			const response = await getProjects();
			const projectNames = response.data.map((project) => project.titulo);
			projectNames.unshift("No Seleccionado");
			setProjects(projectNames);
		}catch(error)
		{
			console.log(error);
			throw error;
		}
	}

	function prepareCreateEventDTO() {
		return {
			nombre_evento: name,
			descripcion_evento: description,
			lider: leader,
			modalidad_evento: mode,
			lugar_evento: location,
			categoria: category,
			proyecto: project,
			fecha_evento: date.toString(),
			hora_inicio: startTime.toString(),
			hora_fin: endTime.toString(),
			estado: "1",
		}
	}

	async function handleClickEventAction() {
    	let eventId = getIdFromURL();
		const eventDTO = prepareCreateEventDTO();
		if (isEditMode) {
			const response = await updateEventById(eventId, eventDTO);
		} else {
			const response = await createEvent(eventDTO);
		}
		window.location.reload();
	}

  	return (
			<div style={modalStyle}>
				<FormProvider {...methods}>
					<Typography variant="h6" component="h2">
						{isEditMode ? "Editar evento": "Crear evento"}
					</Typography>
					<MyTextField
						label="Nombre del evento *"
						value={name}
						onChange={({ target }) => setName(target.value)}
					/>
					<MyTextField
						label="Descripción"
						value={description}
						onChange={({ target }) => setDescription(target.value)}
						multilineRows={4}
					/>
					<MySelect
						placeholder="Líder *"
						value={leader}
						onChange={({ target }) => setLeader(target.value)}
					>
						{leaders.map((item) => (
							<MenuItem key={item} value={item}>
								{item}
							</MenuItem>
						))}
					</MySelect>
					<MySelect
						placeholder="Modalidad *"
						value={mode}
						onChange={({ target }) => setMode(target.value)}
					>
						<MenuItem value="Presencial">
							Presencial
						</MenuItem>
						<MenuItem value="Virtual">
							Virtual
						</MenuItem>
					</MySelect>
					<MyTextField
						label="Lugar"
						value={location}
						onChange={({ target }) => setLocation(target.value)}
					/>
					<MySelect
						placeholder="Categoría *"
						value={category}
						onChange={({ target }) => setCategory(target.value)}
					>
						{categories.map((item) => (
							<MenuItem key={item} value={item}>
								{item}
							</MenuItem>
						))}
					</MySelect>
					<MySelect
						placeholder="Proyecto"
						value={project}
						onChange={({ target }) => setProject(target.value)}
					>
						{projects.map((item) => {
							return (
								<MenuItem key={item} value={item}>
									{item}
								</MenuItem>
							);
						})}
					</MySelect>
					<MyDatePicker
						label="Fecha *"
						value={date}
						onChange={(value) => setDate(value)}
					/>
					<MyTimePicker 
						label="Hora Inicio *"
						value={startTime}
						onChange={(value) => setStartTime(value)}
					/> 
					<MyTimePicker
						label="Hora Fin *"
						value={endTime}
						onChange={(value) => setEndTime(value)}
					/>
					<MyButton
						className="default"
						onClick={async () => handleClickEventAction()}
					>
						{isEditMode ? "Actualizar evento" : "Crear evento"}
					</MyButton>
				</FormProvider>
				<SnackbarMessage snackbar={snackbar} setActive={setSnackbar} />
			</div>
	);
}

export default EventForm;

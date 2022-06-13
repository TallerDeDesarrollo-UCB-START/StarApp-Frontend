import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
	getEventById,
	getEventParticipants,
	deleteEventById
} from "../../../api/rename/renameAPI";
import MyButton from "../../../components/button";
import MyDeleteModal from "../../../components/deleteModal";
import { Grid, Box, Typography } from '@mui/material';
import useStyles from "./EventDetails.styles";
import MyModal from "../../../components/myModal";
import EventForm from "../eventForm/EventForm";
import ExportExcel from "react-export-excel";
import { formatDate, formatTime } from "../../../utils/DateTime.util";
import { getIdFromURL } from "../../../utils/Url.util";
import { useMediaQuery } from '@material-ui/core';
import BadRequests from "../../../components/redirect status/BadRequests";
import RedirectErrorPage from "../../../components/redirect status/RedirectErrorPage";
import SnackbarMessage from "../../../components/templates/SnackbarMessage";
const { ExcelFile, ExcelSheet, ExcelColumn } = ExportExcel;

const EventDetails = () => {
	const classes = useStyles();
	const history = useHistory();
	const smallScreen = !useMediaQuery("(min-width:760px)")
	const eventInitialState = {
		nombre_evento: "",
		fecha_evento: "",
		hora_inicio: "",
		hora_fin: "",
		modalidad_evento: "",
		lugar_evento: "",
		lider: "",
		proyecto: "",
		categoria: ""
	}
	const [snackbar, setSnackbar] = useState({
		message: "",
		active: false,
		severity: "success",
		afterClose:()=>{console.log("despues del mensaje");},
	  });
	const activeSnackbar = (message, severity, afterClose) => {
		setSnackbar({ message, severity, afterClose, active: true });
	  };
	const [event, setEvent] = useState(eventInitialState);
	const [participants, setParticipants] = useState([]);
	const [participantsToDownload, setParticipantsToDownload] = useState([]);

	const [isOpenForm, setIsOpenForm] = useState(false);
	const [isOpenDelete, setIsOpenDelete] = useState(false);

	useEffect(async () => {
		try{
			await callGetEventById();
			await callGetEventParticipants();
		}catch(error)
		{
			console.log(error);
			if (error.message == "Network Error"){
				RedirectErrorPage(500,history,"Hubo un error en la conexión con los datos.")
				return;
			}
			let message = BadRequests(404);
        	activeSnackbar("No se pudo recuperar los datos del evento, "+message, "error");
		}
	}, [])

	const callGetEventById = async () => {
		try{
			let eventId = getIdFromURL();
			const response = await getEventById(eventId);
			setEvent(response.data[0]);
		}catch(error)
		{
			console.log(error);
			throw error;
		}
	}

	const callGetEventParticipants = async () => {
		try{
			let eventId = getIdFromURL();
			const response = await getEventParticipants(eventId);
			setParticipantsToDownload([...response.data]);
			const participantsData = response.data;
			const participantBlocks = [];
			while(participantsData.length) {
				participantBlocks.push(participantsData.splice(0,5));
			}
			setParticipants(participantBlocks);
		}catch(error)
		{
			console.log(error);
			throw error;
		}
	}

	async function handleDeleteEvent() {
    	let eventId = getIdFromURL();
		const response = await deleteEventById(eventId);
		history.push("/eventos");
	}

	const { card_event, image_container, details_container, information_container,description_container,values_grid } = classes;
	const resizeGrids=(maxSize, minSize)=>
	{
		if (smallScreen){
			return maxSize;
		}
		else{
			return minSize;
		}
	}
	return (
		<>
			<MyButton onClick={() => window.history.back()} className="go-back"/>
			<Grid container className={card_event}>
				<Grid item xs={resizeGrids(12, 8)}>
					<Typography variant="h4">
						{event.nombre_evento}
					</Typography>
				</Grid>
				<Grid item xs={resizeGrids(12, 4)} align="right">
					<MyButton className="edit" onClick={() => setIsOpenForm(true)}/>
					<MyButton className="delete-icon" onClick={() => setIsOpenDelete(true)}/>
				</Grid>
				<Grid className={image_container} item xs={resizeGrids(12, 8)} style={{background:"blue"}}>
					<Box
						component="img"
						sx={{
							width: "100%",
							height: "100%",
							minHeight: "350px"
						}}
						alt="The house from the offer."
						src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
					/>
				</Grid>
				<Grid className={details_container} item xs={resizeGrids(12, 4)}>
					<Grid container className={information_container}>
						<Grid item xs={4} align="right">
							<strong>Fecha:</strong>
						</Grid>
						<Grid item container xs={7} className={values_grid}>
							{formatDate(event.fecha_evento)}
						</Grid>
						<Grid item xs={4} align="right">
							<strong>Hora inicio:</strong>
						</Grid>
						<Grid item container xs={7} className={values_grid}>
							{formatTime(event.hora_inicio)}
						</Grid>
						<Grid item xs={4} align="right">
							<strong>Hora fin:</strong>
						</Grid>
						<Grid item container xs={7}>
							{formatTime(event.hora_fin)}
						</Grid>
						<Grid item xs={4} align="right">
							<strong>Modalidad:</strong>
						</Grid>
						<Grid item container xs={7}>
							{event.modalidad_evento}
						</Grid>
						<Grid item xs={4} align="right">
							<strong>Lugar:</strong>
						</Grid>
						<Grid item container xs={7}>
							{event.lugar_evento}
						</Grid>
						<Grid item xs={4} align="right">
							<strong>Lider:</strong>
						</Grid>
						<Grid item container xs={7}>
							{event.lider}
						</Grid>
						<Grid item xs={4} align="right">
							<strong>Proyecto:</strong>
						</Grid>
						<Grid item container xs={7}>
							{event.proyecto}
						</Grid>
						<Grid item xs={4} align="right">
							<strong>Categoria:</strong>
						</Grid>
						<Grid item container xs={7}>
							{event.categoria}
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<div className={description_container}>
						{event.descripcion_evento}
					</div>
				</Grid>
			</Grid>
			<br />
			<br />
			<Grid container spacing={3}>
				<Grid item xs={12} align="right">
					<ExcelFile
						element={
							<MyButton className="excel" />
						}
						filename="Lista_De_Participantes"
						>
						<ExcelSheet data={participantsToDownload} name="Participantes">
							<ExcelColumn label="Nombre" value="nombre" />
							<ExcelColumn label="Apellido" value="apellido" />
							<ExcelColumn label="Evento" value="nombre_evento" />
							<ExcelColumn label="Hora Inicio" value="hora_inicio" />
							<ExcelColumn label="Hora Fin" value="hora_fin" />
							<ExcelColumn label="Telefono" value="telefono" />
							<ExcelColumn label="Rol" value="rol" />
						</ExcelSheet>
					</ExcelFile>
				</Grid>
				<Grid item xs={12} align="center">
					<Typography variant="h5">
						Lista de participantes
					</Typography>
				</Grid>
				{participants.map((participantBlock) => (
					<Grid item xs={4} align="center">
						{participantBlock.map((participant) => (
							<Typography>
								{participant.nombre + " " + participant.apellido}
							</Typography>
						))}
					</Grid>
				))}
			</Grid>

			<MyModal isOpen={isOpenForm} onClose={() => setIsOpenForm(false)}>
				<EventForm isEditMode={true} event={event}/>
			</MyModal>

			<MyDeleteModal
				nameToDelete={event.nombre_evento}
				isOpen={isOpenDelete}
				onClose={() => setIsOpenDelete(false)}
				onDelete={handleDeleteEvent}
			/>
			<SnackbarMessage snackbar={snackbar} setActive={setSnackbar} />
		</>
	);
}

export default EventDetails;

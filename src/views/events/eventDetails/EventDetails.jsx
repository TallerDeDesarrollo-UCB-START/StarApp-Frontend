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

const EventDetails = () => {
	const classes = useStyles();
	const history = useHistory();

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
	const [event, setEvent] = useState(eventInitialState);
	const [participants, setParticipants] = useState([]);

	const [isOpenDelete, setIsOpenDelete] = useState(false);

	useEffect(() => {
		callGetEventById();
		callGetEventParticipants();
	}, [])

	function getIdFromURL(currentUrl) {
    currentUrl.substring(currentUrl.indexOf("/") + 1);
    return currentUrl.split("/").pop();
  }

	const callGetEventById = async () => {
		let currentUrl = window.location.href;
    let eventId = getIdFromURL(currentUrl);
		const response = await getEventById(eventId);
		setEvent(response.data[0]);
	}

	const callGetEventParticipants = async () => {
		let currentUrl = window.location.href;
    	let eventId = getIdFromURL(currentUrl);
		const response = await getEventParticipants(eventId);
		const participantsData = response.data;
		const participantBlocks = [];
		while(participantsData.length) {
			participantBlocks.push(participantsData.splice(0,5));
		}
		setParticipants(participantBlocks);
	}

	async function handleDeleteEvent() {
		let currentUrl = window.location.href;
    	let eventId = getIdFromURL(currentUrl);
		//const response = await deleteEventById(eventId);
		history.push("/eventos");
	}

	const { image_container, details_container, description_container } = classes;

	return (
		<>
			<MyButton onClick={() => window.history.back()} className="go-back"/>
			<Grid container>
				<Grid item xs={8}>
					<Typography variant="h4">
						{event.nombre_evento}
					</Typography>
				</Grid>
				<Grid item xs={4} align="right">
					<MyButton className="edit" />
					<MyButton className="delete-icon" onClick={() => setIsOpenDelete(true)}/>
				</Grid>
				<Grid className={image_container} item xs={8}>
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
				<Grid className={details_container} item xs={4}>
					<Grid container spacing={2}>
						<Grid item xs={5} align="right">
							<strong>Fecha:</strong>
						</Grid>
						<Grid item container xs={7}>
							{event.fecha_evento}
						</Grid>
						<Grid item xs={5} align="right">
							<strong>Hora inicio:</strong>
						</Grid>
						<Grid item container xs={7}>
							{event.hora_inicio}
						</Grid>
						<Grid item xs={5} align="right">
							<strong>Hora fin:</strong>
						</Grid>
						<Grid item container xs={7}>
							{event.hora_fin}
						</Grid>
						<Grid item xs={5} align="right">
							<strong>Modalidad:</strong>
						</Grid>
						<Grid item container xs={7}>
							{event.modalidad_evento}
						</Grid>
						<Grid item xs={5} align="right">
							<strong>Lugar:</strong>
						</Grid>
						<Grid item container xs={7}>
							{event.lugar_evento}
						</Grid>
						<Grid item xs={5} align="right">
							<strong>Lider:</strong>
						</Grid>
						<Grid item container xs={7}>
							{event.lider}
						</Grid>
						<Grid item xs={5} align="right">
							<strong>Proyecto:</strong>
						</Grid>
						<Grid item container xs={7}>
							{event.proyecto}
						</Grid>
						<Grid item xs={5} align="right">
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
					<MyButton className="excel" />
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

			<MyDeleteModal
				nameToDelete={event.nombre_evento}
				isOpen={isOpenDelete}
				onClose={() => setIsOpenDelete(false)}
				onDelete={handleDeleteEvent}
			/>
		</>
	);
}

export default EventDetails;

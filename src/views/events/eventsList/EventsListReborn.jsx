import { useEffect, useState } from "react";
import { MenuItem, Typography } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import { getMyUserRole, getEvents, getCategories } from "../../../api/rename/renameAPI";
import MyButton from "../../../components/button";
import MySelect from "../../../components/select";
import EventCard from "../../../components/eventCard"
import useStyles from "./EventsListReborn.styles";
import { DateTime } from "luxon";

const EventsListReborn = () => {
	const classes = useStyles();

	const [userRole, setUserRole] = useState("");
	const [events, setEvents] = useState([]);
	const [categories, setCategories] = useState([]);
	const [filteredCategory, setFilteredCategory] = useState("");
	const [arePastEvents, setArePastEvents] = useState(false);

	const currentDate = DateTime.now();

	useEffect(() => {
		const callGetEvents = async () => {
			const response = await getEvents();
			setEvents(response.data);
		}
		const callGetCategories = async () => {
			const response = await getCategories();
			const categoryNames = response.data.map((category) => category.interes);
			categoryNames.unshift("Todas");
			setFilteredCategory(categoryNames[0]);
			setCategories(categoryNames);
		}
		const callGetMyUserRole = async () => {
			const response = await getMyUserRole();
			setUserRole(response.data.data.rol);
		}

		callGetEvents();
		callGetCategories();
		callGetMyUserRole();
	}, []);

	function handleSelectChange({ target }) {
		setFilteredCategory(target.value)
	}

	function filterByCategory(events) {
		if (filteredCategory === "Todas") {
			return events;
		}
		return events.filter(event => event.categoria === filteredCategory);
	}

	function filterByDate(events) {
		const pastEvents = [];
		const currentEvents = [];
		events.map((event) => {
			if (DateTime.fromISO(event.fecha_evento) < (currentDate)) {
				pastEvents.push(event);
			} else {
				currentEvents.push(event);
			}
		});
		return arePastEvents ? pastEvents : currentEvents;
	}

	
	let filteredEvents = filterByCategory(events);
	filteredEvents = filterByDate(filteredEvents);
	
	const { actions_container, filters_container, cards_container } = classes;
	return (
		<>
			<MyButton
				onClick={() => window.history.back()}
				className="go-back"
			/>
			<Typography variant="h2" component="h2">
				{ arePastEvents ? "EVENTOS PASADOS" : "EVENTOS VIGENTES"}
			</Typography>
			<div className={actions_container}>
				<div className={filters_container}>
					<MySelect
						value={filteredCategory}
						onChange={handleSelectChange}
					>
						{categories.map((item) => (
							<MenuItem key={item} value={item}>
								{item}
							</MenuItem>
						))}
					</MySelect>
					<div>
						<MyButton className="filter" variant={arePastEvents ? "outlined": "contained"} onClick={() => setArePastEvents(false)}>
							EVENTOS VIGENTES
						</MyButton>
						<MyButton className="filter" variant={arePastEvents ? "contained" : "outlined"} onClick={() => setArePastEvents(true)/*getEventsArchivados()*/}>
							EVENTOS PASADOS
						</MyButton>
					</div>
				</div>
				<div>
					{userRole !== "voluntario" && (
						<MyButton onClick={() => console.log('click crear evento')} className="default">
							CREAR EVENTO&nbsp;<AddIcon fontSize="small"/>
						</MyButton>
					)}
				</div>
			</div>
			<br />
			<div className={cards_container}>
				{filteredEvents.map((event) => (
					<EventCard event={event} hasActions={true}/>
				))}
			</div>
		</>
	);
}

export default EventsListReborn;

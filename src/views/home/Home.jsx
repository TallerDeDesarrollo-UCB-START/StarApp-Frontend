import React, { useState, useEffect, useCallback } from 'react';
import { Typography } from "@material-ui/core";
import MyButton from "../../components/button";
import EventCard from "../../components/eventCard";
import { getMyEvents } from "../../api/rename/renameAPI";
import FillDataReminder from "./FillDataReminder";
import LandingView from './LandingView';
import PhoneDialog from './PhoneDialog';
import useStyles from "./Home.styles";

const Home = ({ sessionData }) => {
	const isLogged = Boolean(sessionStorage.getItem("jwt"));
	const classes = useStyles();
	const [events, setEvents] = useState([]);

	useEffect(() => {
		const callGetMyEvents = async () => {
			const response = await getMyEvents(sessionData.id);
			setEvents(response.data);
		};

		callGetMyEvents();
	}, [sessionData.id]);


	const { home_content, fill_data_reminder } = classes;
	return (
		<>
			{(isLogged && sessionData.id) ? (
					<div>
						<Typography variant="h2" component="h2">
							Tus Próximos Eventos
						</Typography>
						<div className={home_content}>
							{events.length === 0 ? (
								<>
									<Typography color="textSecondary">
										Aún no te has registrado a ningún evento. Una vez te hayas
										registrado a alguno de nuestros eventos, aparecerán en tu página de
										inicio.
									</Typography>
									<MyButton className="default" onClick={() => (window.location.href = "/eventos")}>
										Explorar proyectos
									</MyButton>
								</>
							) : (
								events.map((event) => (
									<EventCard event={event}/>
								))
							)}
						</div>
						<PhoneDialog user={sessionData.id} />
						<div className={fill_data_reminder}>
							<FillDataReminder/>
						</div>
					</div>
				) : (
					<LandingView />
				)
			}
		</>
	)
}
export default Home;

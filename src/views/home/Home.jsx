import React from 'react';
import { Typography } from "@material-ui/core";
import FillDataReminder from "./FillDataReminder";
import EventosProximos from './EventosProximos';
import LandingView from './LandingView';
import PhoneDialog from './PhoneDialog';
import useStyles from "./Home.styles";

const Home = ({ sessionData }) => {
	const isLogged = false; //Boolean(sessionStorage.getItem("jwt"));
	const classes = useStyles();
	const { fillDataReminder } = classes;
	return (
		<>
			{(isLogged && sessionData.id) ? (
					<>
						<Typography variant="h2" component="h2" gutterBottom>
							Tus Próximos Eventos
						</Typography>
						<EventosProximos id={sessionData.id} />
						<PhoneDialog user={sessionData.id} />
						<div className={fillDataReminder}>
							<FillDataReminder/>
						</div>
					</>
				) : (
					<LandingView />
				)
			}
		</>
	)
}
export default Home;

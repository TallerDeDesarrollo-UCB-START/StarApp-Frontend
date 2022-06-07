import React from 'react';
import FillDataReminder from "./FillDataReminder";
import EventosProximos from './EventosProximos';
import LandingView from './LandingView';
import PhoneDialog from './PhoneDialog';

const Home = ({ sessionData }) => (
	<>
		{(!sessionData.id) ? <LandingView /> : (
				<div>
					<EventosProximos id={sessionData.id} title = {true} />
					<PhoneDialog user={sessionData.id} />
				</div>
			)
		}
		<FillDataReminder/>
	</>
)
export default Home;

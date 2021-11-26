import RecordatorioLlenarDatos from "../RecordatorioLlenarDatos"
import EventosProximos from './EventosProximos';
import React from 'react'
import LandingView from './LandingView';

const Home = ({sessionData}) =>{
    return(
        <section>
            {(!sessionData.id)?
                <LandingView/>:
                (<div style={{padding: "40px 5%"}}>
                    <EventosProximos id={sessionData.id} title = {true} />
                </div>)
            }
            <RecordatorioLlenarDatos/>
        </section>
    )
}
export default Home;
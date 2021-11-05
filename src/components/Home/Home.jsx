import RecordatorioLlenarDatos from "../RecordatorioLlenarDatos"
import EventosProximos from './EventosProximos';
import React from 'react'
import LandingView from './LandingView';

const Home = ({sessionData}) =>{
    return(
        <section>
            {(!sessionData.id)?
                <LandingView/>:
                (<EventosProximos id={sessionData.id}/>)
            }
            <RecordatorioLlenarDatos/>
        </section>
    )
}
export default Home;
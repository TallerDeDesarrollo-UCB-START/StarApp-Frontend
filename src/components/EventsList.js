import React from 'react';
import {Link } from 'react-router-dom'
class EventsList extends React.Component {


    render() {

        return (
            <div>
                <div>
                    <h1> Bienvenido a Lista de eventos!</h1>
                </div>

                <div>
                    <Link to="/eventos/crearevento">Crear Evento</Link>
                </div>

                <div>
                    <Link to="/eventos/event">Ver Evento</Link>
                </div>

            </div>



        );
    }
}

export default EventsList
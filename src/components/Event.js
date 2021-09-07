import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// var event = {
//     name: 'Event 1',
//     volunteers: [
//         volunteer = {
//             name: 'Erick',
//             attendance: true
//         },
//         volunteer = {
//             name: 'Ricky',
//             attendance: false
//         },

//     ]



// };
class Event extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <h1> Bienvenido a Evento!</h1>
                </div>
                <div>
                    <Link to="/events/event/attendance">Validar asitencia de voluntarios</Link>
                </div>
                <div>
                    <Link to="/events/event/registroAEvento">Participar en el evento</Link>
                </div>

            </div>


         );
    }
}

export default Event
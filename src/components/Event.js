import React from "react";
import { Link } from "react-router-dom";
import EventsList from "./EventsList";

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
    try{
      return (
        <div>
          <div>
            <h1> Bienvenido a Evento!</h1>
          </div>
          <div>
            <Link to="/events/event/attendance">
              Validar asitencia de voluntarios
            </Link>
          </div>
          <div>
            <Link to="/events/event/registroAEvento">
              Participar en el evento
            </Link>
            <EventsList> </EventsList>
          </div>
        </div>
      );
    }
    catch(error){
      console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
      console.log("readyyyyyyyyyyyyyyy")
    }
  }
}

export default Event;

// Componentes:
import './ParticiparEnProyectoBtn.css';
// Librerias-Paquetes:
import { Container } from '@material-ui/core';
import React, { useState, useEffect, Component } from "react";
import { render } from 'react-dom';
import { Button } from '@material-ui/core';
import { makeStyles, withStyles} from "@material-ui/core/styles";


// Merce Vic
function ParticiparEnProyectoBtn( {proyecto,  onPartiparProy, onGetParticipacion}) {

    // States
    //const [event, verificarParticipacion] = useState(0);
    useEffect(function () {
        onGetParticipacion(proyecto.id).then(state => 
            {if(state) {
                document.getElementById(proyecto.id).classList.add('button-hide');
            }}
        );
    })

    const onClick = (event) => {
        onPartiparProy(proyecto.id); 
        document.getElementById(proyecto.id).classList.add('button-hide');
        alert('Registered participation'); 
    }

    return (
        <div id={proyecto.id}>
            <ParticipateButton variant="contained" color="secondary"
            onClick={onClick}
            >
                Participar
            </ParticipateButton>
        </div> 
    );
}

const ParticipateButton = withStyles((theme) => ({
    root: {
      color: "#FFFFFF",
    },
  }))(Button);

export default ParticiparEnProyectoBtn
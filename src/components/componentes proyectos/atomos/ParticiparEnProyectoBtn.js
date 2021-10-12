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
        if(proyecto.id!== null) {
            /*
            document.getElementById("buttonCrearProyecto").classList.add('button-hide');
            console.log('hola');*/
            console.log(document.querySelectorAll(".participarButton"));
            //document.querySelector(".participarButton").classList.add('button-hide');
            //document.querySelectorAll(".participarButton").forEach(element => element.classList.add('button-hide'));
            document.getElementById(proyecto.id).classList.add('button-hide');
            
        }
      })
    //const [titulo, setTitulo] = useState('')
    function agregarRequerido(element){
        element.classList.add('button-hide');
    }

    /*
    function verificarParticipacion(element){
        if(onGetParticipacion) {
            element.classList.add('button-hide');
        }
    }*/

    const onClick = (event) => {
        onPartiparProy(proyecto.id); 
        alert('Registered participation'); 
        agregarRequerido(event.currentTarget);
        //verificarParticipacion(event.currentTarget);
    }
    return (
        <ParticipateButton id={proyecto.id} variant="contained" color="secondary"
            onClick={onClick}
        >
        Participar
        </ParticipateButton>
    );
}

const ParticipateButton = withStyles((theme) => ({
    root: {
      color: "#FFFFFF",
    },
  }))(Button);

export default ParticiparEnProyectoBtn
// Componentes:
import './ParticiparEnProyectoBtn.css';
// Librerias-Paquetes:
import { Container } from '@material-ui/core';
import React, { useState } from "react";


// Merce Vic
function ParticiparEnProyectoBtn( {proyecto,  onPartiparProy}) {
    
    // States
    //const [titulo, setTitulo] = useState('')
    function agregarRequerido(element){
        element.classList.add('button-hide')
    }
    const onClick = (event) => {
        onPartiparProy(proyecto.id); 
        alert('Registered participation'); 
        agregarRequerido(event.currentTarget);
    }
    return (
        <button className="participarButton"
            onClick={onClick}
        >
        Participar
        </button>
    );
}

export default ParticiparEnProyectoBtn
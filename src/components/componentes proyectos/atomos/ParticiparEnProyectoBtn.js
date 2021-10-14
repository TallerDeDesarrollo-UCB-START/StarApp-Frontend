// Componentes:
import './ParticiparEnProyectoBtn.css';
// Librerias-Paquetes:
import React, {useEffect} from "react";
import { Button } from '@material-ui/core';
import { makeStyles, withStyles} from "@material-ui/core/styles";
import AlertMessage from '../../../components/templates/AlertMessage';


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
            <AlertMessage message={'Registered participation'}></AlertMessage>
        </div> 
    );
}

const ParticipateButton = withStyles((theme) => ({
    root: {
      color: "#FFFFFF",
    },
  }))(Button);

export default ParticiparEnProyectoBtn
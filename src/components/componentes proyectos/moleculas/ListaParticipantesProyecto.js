// Componentes:
// Librerias-Paquetes:
import { Box } from '@material-ui/core';
import { useState,useEffect } from 'react';
import { Typography} from '@material-ui/core';

function ListaParticipantesProyecto({proyectoId}){

    const[participantes, setParticipantes]=useState([])

    useEffect(() => {
        const getParticipantes = async () => {
        const participantesProyecto =  await fetchParticipantes()
        setParticipantes(participantesProyecto)
        }
        getParticipantes()
    })

    // HTTP requests & functions
    async function fetchParticipantes() {
        const response = await fetch(`${process.env.REACT_APP_API}get_participantes_proyecto_simple/${proyectoId}`)
        const data = await response.json()
        return data;
    }
    return (
        <Box>
            <p>Participantes:</p>
            {
                participantes.map(participante=>(
                    <Typography  variant="h3">
                        {participante.nombre}
                    </Typography>
                    
                ))
            }

        </Box>

    );
}
export default ListaParticipantesProyecto
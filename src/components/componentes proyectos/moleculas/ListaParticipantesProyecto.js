// Componentes:
// Librerias-Paquetes:
import { Box ,Typography,List, ListItem,ListItemIcon,ListItemText} from '@material-ui/core';
import { useState,useEffect } from 'react';

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
            <List>
            {
                participantes.map(participante=>(
                    <ListItem>
                        <ListItemIcon>

                        </ListItemIcon>
                        <ListItemText primary={participante.nombre} />
                    </ListItem>

                ))
            }

            </List>


        </Box>

    );
}
export default ListaParticipantesProyecto 
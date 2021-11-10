// Librerias-Paquetes:
import ListaParticipantesProyecto from './ListaParticipantesProyecto';
import './ContenidoProyecto.css';
import { Box } from '@material-ui/core';
import { Switch } from '@material-ui/core';
// Permisos/Roles:
import PuertaPermisos from '../organismos/PuertaPermisos';
import {SCOPES} from '../organismos/map-permisos';
import {useState } from 'react';

function ContenidoProyectoDetalle ({proyecto}) {
    const fechaFin = proyecto.fecha_fin?proyecto.fecha_fin: "En Progreso"
    //const visualizarP = proyecto.visualizar
    const [visualizarP, setVisualizarP] = useState(proyecto.visualizar)

    const Onchange = async () => {
        //debugger
        setVisualizarP(!visualizarP)
       // visualizarP = !visualizarP
        const proyectoEditar={
            visualizar: visualizarP
        }
        const response = await fetch(
            `${process.env.REACT_APP_API}update_proyecto/${proyecto.id}`,
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(proyectoEditar)
            })
        const data = await response.json()    
        console.log(data)
    }

     const switchListaParticipantes = proyecto.visualizar === true?
        <ListaParticipantesProyecto proyectoId={proyecto.id}/>
        :<PuertaPermisos scopes={[SCOPES.canCrudProyectos]}>
        <ListaParticipantesProyecto proyectoId={proyecto.id}/>
        </PuertaPermisos>
        

    const listaPartipantes = <PuertaPermisos scopes={[SCOPES.canCrudProyectos]}>
                                    <Switch
                                    onClick={Onchange}
                                    checked={!visualizarP} 
                                    
                                    />
                                </PuertaPermisos>
    
    return (
       
        <Box className="content-container">
             {console.log(proyecto)}
            <b>
                <h1 className="card-title">{proyecto.titulo}</h1>
            </b>
            <p className="card-text">
                <b>Fecha de Inicio:</b> {proyecto.fecha_inicio}
            </p>
            <p>
                <b>Fecha de Fin:</b> {fechaFin}
            </p>
            <p className="card-text">
                <b>Descripción:</b> {proyecto.descripcion}
            </p>
            <p className="card-text">
                <b>Objetivo:</b> {proyecto.objetivo}
            </p>
            <p className="card-text">
                <b>Líder:</b> {proyecto.lider}
            </p>
            <p className="card-text">
                <b>Categoría:</b> {proyecto.categoria}
            </p>
            {listaPartipantes}
            {switchListaParticipantes}
            
        </Box>
    );
}
 
export default ContenidoProyectoDetalle

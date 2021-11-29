// Librerias-Paquetes:
import ListaParticipantesProyecto from './ListaParticipantesProyecto';
import CancelarParticipacionBtn from '../atomos/CancelarParticipacionBtn';
import './ContenidoProyectoDetalle.css';
import { Box } from '@material-ui/core';
import { Switch } from '@material-ui/core';
// Permisos/Roles:
import PuertaPermisos from '../organismos/PuertaPermisos';
import {SCOPES} from '../organismos/map-permisos';
import {useState } from 'react';
import {useCancelarParticipacion} from '../zfunciones/CancelarParticipacionContext'

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
        <ListaParticipantesProyecto/>
        :<PuertaPermisos scopes={[SCOPES.canCrudProyectos]}>
        <ListaParticipantesProyecto/>
        </PuertaPermisos>
        

    const listaPartipantes = <PuertaPermisos scopes={[SCOPES.canCrudProyectos]}>
                                    <Switch
                                    onClick={Onchange}
                                    checked={!visualizarP} 
                                    
                                    />
                                </PuertaPermisos>


    const METODOS = useCancelarParticipacion()
    const onCancelarParticipacion = METODOS.find(metodo => metodo.cancelarParticipacionProyecto)
    const onGetParticipacion = METODOS.find(metodo => metodo.cancelarParticipacionProyecto)
    const asignarParticipacion = METODOS.find(metodo => metodo.cancelarParticipacionProyecto)
    const asignarSnackbarStatus = METODOS.find(metodo => metodo.cancelarParticipacionProyecto)
    const avisoAccion = METODOS.find(metodo => metodo.cancelarParticipacionProyecto)
    const participacion = true
    console.log(onCancelarParticipacion)
    const botonCancelarParticipacion = participacion === true?
    <CancelarParticipacionBtn proyecto={proyecto} 
                            onCancelarParticipacion={onCancelarParticipacion} 
                            onGetParticipacion={onGetParticipacion}
                            onAsignarParticipacion={asignarParticipacion}
                            onAsignarSnackbarStatus={asignarSnackbarStatus}
                            onAvisoAccion={avisoAccion}
                            />
    : ''
    

    return (
        <Box className="content-container-detail">
            {console.log(proyecto)}
            <b>
                <h1 className="card-title-detail">{proyecto.titulo}</h1>
            </b>
            <p className="card-text-detail">
                <b>Fecha de Inicio:</b> {proyecto.fecha_inicio}
            </p>
            <p className="card-text-detail">
                <b>Fecha de Fin:</b> {fechaFin}
            </p>
            <p className="card-text-detail">
                <b>Descripción:</b> {proyecto.descripcion}
            </p>
            <p className="card-text-detail">
                <b>Objetivo:</b> {proyecto.objetivo}
            </p>
            <p className="card-text-detail">
                <b>Líder:</b> {proyecto.lider}
            </p>
            <p className="card-text-detail">
                <b>Categoría:</b> {proyecto.categoria}
            </p>
            {listaPartipantes}
            {switchListaParticipantes}
            {botonCancelarParticipacion}
        </Box>
    );
}
export default ContenidoProyectoDetalle

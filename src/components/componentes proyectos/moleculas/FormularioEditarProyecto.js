// Componentes:
import InputTexto from '../moleculas/InputTexto'
//import InputDropDown from "../atomos/InputDropDown";
// Librerias-Paquetes:
//import {VARIABLES} from '../organismos/variables-compartidas'
import '../moleculas/FormularioCrearProyecto.css'
import { useState } from "react"
import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import { Button, Modal } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// Styles
/*const useStylesDrpdn = makeStyles({
  drpdown: {
    margin: "-5px 0%",
    backgroundColor: "#F2F2F2",
    border: "1px solid #C4C4C4",
    borderRadius: "6px",
  },
});*/

//const varProyectos = VARIABLES.datosProyectos

function FormularioEditarProyecto({ onEditarProy, onActivarForm, proyecto, mostrarFormEditar}) {
  // Styles
    //const classesDrpdn = useStylesDrpdn();
    /*const estadoActual= hallarEstado(proyecto.estado);
    function hallarEstado (estado){
        if(estado==='true'){
            return ("Concluido")
        }
        else{
            return ("En Curso") 
        }
    }*/
  // States
    const [fechaInicio, setFechaInicio] = useState(proyecto.fechaInicio)
    const [fechaFin, setFechaFin] = useState(proyecto.fechaFin)
    const [titulo, setTitulo] = useState(proyecto.titulo)
    const [descripcion, setDescripcion] = useState(proyecto.descripcion)
    const [objetivo, setObjetivo] = useState(proyecto.objetivo)
    const [lider, setLider] = useState(proyecto.lider)
    const [categoria, setCategoria] = useState(proyecto.categoria)
    const [estado, setEstado] = useState(proyecto.estado)
    const [informacion_adicional, setInfoAd] = useState(proyecto.infoAd)

    function resetStates() {
        setFechaInicio('')
        setFechaFin('')
        setTitulo('')
        setDescripcion('')
        setObjetivo('')
        setLider('')
        setCategoria('')

        setInfoAd('')
    }

    /*function agregarRequerido(element){
        element.classList.add('requerido')
    }
    function removerRequerido(element){
        element.classList.remove('requerido')
    }

    function validarCampos(event) {
        if (!fechaInicio || !titulo || !descripcion || !objetivo || !lider || !categoria) {
            alert('Porfavor llene los campos')
            //console.log(event)
            if (!fechaInicio) agregarRequerido(event.currentTarget[0])
            if (!titulo) agregarRequerido(event.currentTarget[2])
            if (!descripcion) agregarRequerido(event.currentTarget[3])
            if (!objetivo) agregarRequerido(event.currentTarget[4])
            if (!lider) agregarRequerido(event.currentTarget[5])
            if (!categoria) agregarRequerido(event.currentTarget[6])
            return false
        }
        return true
    }*/

    const onSubmit = (event) => {
        event.preventDefault() // To avoid submitting to an actual page
        const lideres = [lider]
        const objetivos = [objetivo]
        console.log (lideres)
        /*if (validarCampos(event) === false) {
            return
        }*/
        debugger
        const proyectoEditar = {
            id: proyecto.id,
            fechaInicio: fechaInicio,
            fechaFin: fechaFin,
            titulo: titulo,
            descripcion: descripcion,
            objetivo: objetivos,
            lider: lideres,
            estado: estado,
            categoria: categoria,
            informacion_adicional: informacion_adicional
        }
        onEditarProy(proyectoEditar) // callback invocation
        resetStates()
        onActivarForm() // Oculta el formulario
    }

    const onChangeFechaInicio = (e) => {setFechaInicio(e.target.value)}
    const onChangeFechaFin = (e) => {setFechaFin(e.target.value)}
    const onChangeTitulo = (e) => {setTitulo(e.target.value)}
    const onChangeDescrip = (e) => {setDescripcion(e.target.value)}
    const onChangeObjetivo = (e) => {setObjetivo(e.target.value)}
    const onChangeLider = (e) => {setLider(e.target.value)}
    const onChangeCategoria = (e) => {setCategoria(e.target.value)}
    const onChangeEstado = (e) => {setEstado(e.target.value)}
    const onChangeInfoAd = (e) => {setInfoAd(e.target.value)}
    // ---- NUEVO ----
    function getModalStyle() {
        const top = 50;
        const left = 50;
        
        return {
            "@media (maxWidth: 375px)": {
              top: 0,
              left: 0,
            },
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
          };
    }

    const botonCancelarFormulario =
        <Button onClick={onActivarForm}>
            <FontAwesomeIcon className="cancel-icon" icon={faTimes}/>
        </Button>;	
    
    const [modalStyle] = React.useState(getModalStyle);
    
    const handleClose = () => {
        onActivarForm()
    };
    const body = (
        <div style={modalStyle} className="paper-crear">
            <form  onSubmit={onSubmit}>
                {botonCancelarFormulario}
                <div className="crear-container-title">
                    <h4>Editar Proyecto</h4>
                </div>
                <div style={{padding: "1% 3% 0 5%"}}>
                    <label>Fecha de Inicio</label>
                    <InputTexto type="date"
                                value={fechaInicio}
                                onChange={onChangeFechaInicio}
                                />
                    <label>Fecha de Fin</label>
                    <InputTexto type="date"
                                value={fechaFin}
                                onChange={onChangeFechaFin}
                                />
                    <label>Nombre del proyecto</label>
                    <InputTexto type="text"
                                placeHolder='Nombre del proyecto'
                                value={titulo}
                                onChange={onChangeTitulo}
                                />
                    <label>Descripción</label>
                    <InputTexto type="text"
                                placeHolder='Descripción'
                                value={descripcion}
                                onChange={onChangeDescrip}
                                />
                    <label>Objetivo</label>
                    <InputTexto type="text"
                                placeHolder='Objetivo'
                                value={objetivo}
                                onChange={onChangeObjetivo}
                                />
                    <label>Líder</label>
                    <InputTexto type="text"
                                placeHolder='Líder'
                                value={lider}
                                onChange={onChangeLider}
                                />
                    <label>Categoría</label>
                    <InputTexto type="text"
                                placeHolder='Categoría'
                                value={categoria}
                                onChange={onChangeCategoria}
                                />
                    <label>Estado</label>
                    <InputTexto type="text"
                                placeHolder='Estado'
                                value={estado}
                                onChange={onChangeEstado}
                                />
                    <label>Información Adicional</label>
                    <InputTexto type="link"
                                placeHolder='Información Adicional'
                                value={informacion_adicional}
                                onChange={onChangeInfoAd}
                                />
                    <div className="btn-crear-container">
                        <input type='submit' value='GUARDAR CAMBIOS' className='btn-proy-editar btn-proy-block'/>
                    </div>
                </div>
            </form>
            
        </div>);
    
// S implemente hacer abrir el modal con el boton de crear y el body sera lo mismo que tenia antes
    return (
        <div>
            <Modal
                open={mostrarFormEditar}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                >
                {body}
            </Modal>
        </div>
        
    );
}

export default FormularioEditarProyecto

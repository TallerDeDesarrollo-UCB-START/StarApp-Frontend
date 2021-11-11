// Componentes:
import InputTexto from '../moleculas/InputTexto'
// Librerias-Paquetes:
import '../moleculas/FormularioCrearProyecto.css'
//import {VARIABLES} from '../organismos/variables-compartidas'
import { useState } from "react"
import React from 'react';
import Modal from '@material-ui/core/Modal';


function FormularioCrearProyecto({ onCrearProy, onActivarForm, mostrarFormCrear}) {
    // States
    const [fechaInicio, setFechaInicio] = useState('')
    const [fechaFin, setFechaFin] = useState('')
    const [titulo, setTitulo] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [objetivo, setObjetivo] = useState('')
    const [lider, setLider] = useState('')
    const [categoria, setCategoria] = useState('')
    const [estado, setEstado] = useState('')
    const [informacion_adicional, setInfoAd] = useState('')


    function resetStates() {
        setFechaInicio('')
        setFechaFin('')
        setTitulo('')
        setDescripcion('')
        setObjetivo('')
        setLider('')
        setCategoria('')
        setEstado('')
        setInfoAd('')
    }

    function agregarRequerido(element){
        element.classList.add('requerido')
    }
    function removerRequerido(element){
        element.classList.remove('requerido')
    }

    function validarCampos(event) {
        if (!titulo || !descripcion || !objetivo || !lider || !categoria) {
            alert('Porfavor llene los campos')
            //console.log(event)
            if (!titulo) agregarRequerido(event.currentTarget[2])
            if (!descripcion) agregarRequerido(event.currentTarget[3])
            if (!objetivo) agregarRequerido(event.currentTarget[4])
            if (!lider) agregarRequerido(event.currentTarget[5])
            if (!categoria) agregarRequerido(event.currentTarget[6])
            return false
        }
        return true
    }

    const onSubmit = (event) => {
        event.preventDefault() // To avoid submitting to an actual page
        const lideres = [lider]
        const objetivos = [objetivo]
        if (validarCampos(event) === false) {
            return
        }
        const nuevoProyecto = {
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
        onCrearProy(nuevoProyecto) // callback invocation
        resetStates()
        onActivarForm() // Oculta el formulario
    }

    const onChangeFechaInicio = (e) => {setFechaInicio(e.target.value)}
    const onChangeFechaFin = (e) => {setFechaFin(e.target.value)}
    const onChangeTitulo = (e) => {setTitulo(e.target.value); removerRequerido(e.target)}
    const onChangeDescrip = (e) => {setDescripcion(e.target.value); removerRequerido(e.target)}
    const onChangeObjetivo = (e) => {setObjetivo(e.target.value); removerRequerido(e.target)}
    const onChangeLider = (e) => {setLider(e.target.value); removerRequerido(e.target)}
    const onChangeCategoria = (e) => {setCategoria(e.target.value); removerRequerido(e.target)}
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

    	
    
    const [modalStyle] = React.useState(getModalStyle);
    
    const handleClose = () => {
        onActivarForm()
    };
    const body = (
        <div style={modalStyle} className="paper-crear">
            <form  onSubmit={onSubmit}>
                <div className="crear-container-title">
                    <h4>Crear Proyecto</h4>
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
                    <InputTexto type="text"
                                placeHolder='Nombre del proyecto'
                                value={titulo}
                                onChange={onChangeTitulo}
                                />
                    <InputTexto type="text"
                                placeHolder='Descripción'
                                value={descripcion}
                                onChange={onChangeDescrip}
                                />
                    <InputTexto type="text"
                                placeHolder='Objetivo'
                                value={objetivo}
                                onChange={onChangeObjetivo}
                                />
                    <InputTexto type="text"
                                placeHolder='Líder'
                                value={lider}
                                onChange={onChangeLider}
                                />
                    <InputTexto type="text"
                                placeHolder='Categoría'
                                value={categoria}
                                onChange={onChangeCategoria}
                                />
                    <InputTexto type="text"
                                placeHolder='Estado'
                                value={estado}
                                onChange={onChangeEstado}
                                />
                    <InputTexto type="link"
                                placeHolder='Información Adicional'
                                value={informacion_adicional}
                                onChange={onChangeInfoAd}
                                />
                    <div className="btn-crear-container">
                        <input type='submit' value='Crear' className='btn-proy-crear btn-proy-block'/>
                        <button className='btn-proy-block-cancel btn-proy-cancelar' onClick={onActivarForm}> Cancelar </button>
                    </div>
                </div>
            </form>
            
        </div>);
    
// S implemente hacer abrir el modal con el boton de crear y el body sera lo mismo que tenia antes
    return (
        <div>
            <Modal
                open={mostrarFormCrear}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                >
                {body}
            </Modal>
        </div>
        
    );
}

export default FormularioCrearProyecto

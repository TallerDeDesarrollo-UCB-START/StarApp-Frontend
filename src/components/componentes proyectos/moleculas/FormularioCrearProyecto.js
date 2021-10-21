// Componentes:
import InputTexto from '../moleculas/InputTexto'
// Librerias-Paquetes:
import '../moleculas/FormularioCrearProyecto.css'
import { useState } from "react"
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';


function FormularioCrearProyecto({ onCrearProy, onActivarForm, mostrarFormCrear}) {
    // States
    const [titulo, setTitulo] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [objetivo, setObjetivo] = useState('')
    const [lider, setLider] = useState('')

    function resetStates() {
        setTitulo('')
        setDescripcion('')
        setObjetivo('')
        setLider('')
    }

    function agregarRequerido(element){
        element.classList.add('requerido')
    }
    function removerRequerido(element){
        element.classList.remove('requerido')
    }

    function validarCampos(event) {
        if (!titulo || !descripcion || !objetivo || !lider) {
            alert('Porfavor llene los campos')
            console.log(event)
            if (!titulo) agregarRequerido(event.currentTarget[0])
            if (!descripcion) agregarRequerido(event.currentTarget[1])
            if (!objetivo) agregarRequerido(event.currentTarget[2])
            if (!lider) agregarRequerido(event.currentTarget[3])
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
            titulo: titulo,
            descripcion: descripcion,
            objetivo: objetivos,
            lider: lideres,
            estado: "EN CURSO"
        }
        onCrearProy(nuevoProyecto) // callback invocation
        resetStates()
        onActivarForm() // Oculta el formulario
    }

    const onChangeTitulo = (e) => {setTitulo(e.target.value); removerRequerido(e.target)}
    const onChangeDescrip = (e) => {setDescripcion(e.target.value); removerRequerido(e.target)}
    const onChangeObjetivo = (e) => {setObjetivo(e.target.value); removerRequerido(e.target)}
    const onChangeLider = (e) => {setLider(e.target.value); removerRequerido(e.target)}

    // ---- NUEVO ----
    function getModalStyle() {
        const top = 50;
        const left = 50;
        
        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }

    const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 430,
        backgroundColor: '#F2F2F2',
        borderRadius: '15',
        boxShadow: '10px 10px 4px rgba(0, 0, 0, 0.25)',
        padding: 25,
    },
    })); 	
    
    const classNamees = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    

    const handleOpen = () => {
        setOpen(mostrarFormCrear);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    const body = (
        <div style={modalStyle} className="paper-crear">
            <form  onSubmit={onSubmit}>
                <div className="crear-container-title">
                    <h3>CREAR PROYECTO</h3>
                </div>
                <div style={{padding: "3% 3% 0 3%"}}>
                    <InputTexto titulo='Titulo' 
                                placeHolder='Ingrese el titulo'
                                value={titulo}
                                onChange={onChangeTitulo}
                                />
                    <InputTexto titulo='Descripcion' 
                                placeHolder='Ingrese una descripcion'
                                value={descripcion}
                                onChange={onChangeDescrip}
                                />
                    <InputTexto titulo='Objetivo' 
                                placeHolder='Ingrese el objetivo'
                                value={objetivo}
                                onChange={onChangeObjetivo}
                                />
                    <InputTexto titulo='Lider' 
                                placeHolder='Escriba el nombre del lider'
                                value={lider}
                                onChange={onChangeLider}
                                />
                    <div className="btn-crear-container">
                        <input type='submit' value='Crear' className='btn-proy-crear btn-proy-block'/>
                    </div>
                </div>
            </form>
            <button className='btn-proy-block-cancel btn-proy-cancelar' onClick={onActivarForm}> Cancelar </button>
        </div>);
    
// Simplemente hacer abrir el modal con el boton de crear y el body sera lo mismo que tenia antes
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


/*

*/
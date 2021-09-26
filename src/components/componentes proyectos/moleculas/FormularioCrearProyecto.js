// Componentes:
import InputCrearProyecto from '../atomos/InputCrearProyecto'
import ParticiparEnProyectoBtn from '../atomos/ParticiparEnProyectoBtn'
import CrearProyectoBtn from '../atomos/CrearProyectoBtn'
import InputTexto from '../moleculas/InputTexto'
// Librerias-Paquetes:
import '../moleculas/FormularioCrearProyecto.css'
import { useState } from "react"
//import { Container, FormControl, InputLabel, Input, FormHelperText, Grid, Box } from '@material-ui/core';
//import Typography from '@material-ui/core/Typography';

// Kevin y Pame
function FormularioCrearProyecto({ onCrearProy, onActivarForm }) {
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
        if (validarCampos(event) == false) {
            return
        }
        const nuevoProyecto = {
            titulo: titulo,
            descripcion: descripcion,
            objetivo: objetivos,
            lider: lideres
        }
        console.log(nuevoProyecto)
        onCrearProy(nuevoProyecto) // callback invocation
        resetStates()
        onActivarForm() // Oculta el formulario
    }
    
    /* Esto servira para cancelar formulario haciendo click fuera del formulario
    allbody.addEventListener('click', (e) => {  
        const allbody = document.querySelector('#root .MuiBox-root')
        const formu = allbody.querySelector('#gen-form') 
        if (formu){
            if (!formu.contains(e.target)){
                // Clicked outside box
                console.log('adadas')
                onActivarForm()
            } 
        } 
    });*/

    const onChangeTitulo = (e) => {setTitulo(e.target.value); removerRequerido(e.target)}
    const onChangeDescrip = (e) => {setDescripcion(e.target.value); removerRequerido(e.target)}
    const onChangeObjetivo = (e) => {setObjetivo(e.target.value); removerRequerido(e.target)}
    const onChangeLider = (e) => {setLider(e.target.value); removerRequerido(e.target)}

    return (
        <div id="gen-form">
            <form  onSubmit={onSubmit}>
                {/*<div className="underlayer-proy">dads</div>*/}
                <h3 style={{margin: "auto", width: "50%"}}>CREAR PROYECTO</h3>
                <div style={{padding: "3% 3% 0 3%"}}>
                    <InputTexto titulo='Titulo' 
                                placeHolder='Coloque el titulo'
                                value={titulo}
                                onChange={onChangeTitulo}
                                />
                    <InputTexto titulo='Descripcion' 
                                placeHolder='Coloque la descripcion'
                                value={descripcion}
                                onChange={onChangeDescrip}
                                />
                    <InputTexto titulo='Objetivo' 
                                placeHolder='Coloque el objetivo'
                                value={objetivo}
                                onChange={onChangeObjetivo}
                                />
                    <InputTexto titulo='Lider' 
                                placeHolder='Coloque el lider'
                                value={lider}
                                onChange={onChangeLider}
                                />

                    <input type='submit' value='Crear' className='btn-proy btn-proy-block' style={{backgroundColor: 'lime'}}/>

                </div>
            </form>
            <button className='btn-proy btn-proy-block' onClick={onActivarForm} style={{backgroundColor: 'grey'}}> Cancelar </button>
        </div>
        
    );
}

export default FormularioCrearProyecto
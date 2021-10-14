// Componentes:
import InputTexto from '../moleculas/InputTexto'
// Librerias-Paquetes:
import '../moleculas/FormularioCrearProyecto.css'
import { useState } from "react"


function FormularioEditarProyecto({ onEditarProy, onActivarForm, proyecto}) {
    // States
    const [titulo, setTitulo] = useState(proyecto.titulo)
    const [descripcion, setDescripcion] = useState(proyecto.descripcion)
    const [objetivo, setObjetivo] = useState(proyecto.objetivo)
    const [lider, setLider] = useState(proyecto.lider)

    //console.log(proyecto.titulo)
    /*setTitulo(proyecto.titulo)
    setDescripcion(proyecto.descripcion)
    setObjetivo(proyecto.objetivo)
    setLider(proyecto.lider)*/

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
        const proyectoEditar = {
            id: proyecto.id,
            titulo: titulo,
            descripcion: descripcion,
            objetivo: objetivos,
            lider: lideres
        }
        if (validarCampos(event) == false) {
            return
        }
        
        onEditarProy(proyectoEditar) // callback invocation
        resetStates()
        onActivarForm() // Oculta el formulario
    }

    const onChangeTitulo = (e) => {setTitulo(e.target.value); removerRequerido(e.target)}
    const onChangeDescrip = (e) => {setDescripcion(e.target.value); removerRequerido(e.target)}
    const onChangeObjetivo = (e) => {setObjetivo(e.target.value); removerRequerido(e.target)}
    const onChangeLider = (e) => {setLider(e.target.value); removerRequerido(e.target)}

    return (
        <div id="gen-form">
            <form  onSubmit={onSubmit}>
                {/*<div className="underlayer-proy">dads</div>*/}
                <div className="crear-container-title">
                    <h3>EDITAR PROYECTO</h3>
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
                        <input type='submit' value='Editar' className='btn-proy-editar btn-proy-block'/>
                    </div>
                </div>
            </form>
            <button className='btn-proy-block-cancel btn-proy-cancelar' onClick={onActivarForm}> Cancelar </button>
        </div>
        
    );
}

export default FormularioEditarProyecto
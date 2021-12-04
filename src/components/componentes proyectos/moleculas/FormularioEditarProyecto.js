// Componentes:
import InputTexto from '../moleculas/InputTexto'
//import InputDropDown from "../atomos/InputDropDown";
// Librerias-Paquetes:
import '../moleculas/FormularioCrearProyecto.css'
import { useState } from "react"
import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import { Button, Modal, InputLabel} from '@material-ui/core';
//import { Button, Modal, FormData, FormControl, MenuItem, Select} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useForm, /*SubmitHandler,*/ FormProvider } from "react-hook-form";


function FormularioEditarProyecto({ onEditarProy, onActivarForm, proyecto, mostrarFormEditar, lideres, categorias }) {

    const methods = useForm()
    // CONSTANTES:
    const estados = [
        {value: 10, label: "CONCLUIDO"},
        {value: 20, label: "EN CURSO"},
    ]
    const estadoAcabadoValor = estados[0].value
    const estadoAcabadoLabel = estados[0].label
    const estadoEnCursoValor = estados[1].value
    const estadoEnCursoLabel = estados[1].label

    // HOOKS:
    // States fields
    const [fechaInicio, setFechaInicio] = useState(proyecto.fechaInicio)
    const [fechaFin, setFechaFin] = useState(proyecto.fechaFin)
    const [titulo, setTitulo] = useState(proyecto.titulo)
    const [descripcion, setDescripcion] = useState(proyecto.descripcion)
    const [objetivo, setObjetivo] = useState(proyecto.objetivo[0][0][0])//objetivo es un array en backend que esta nesteado 3 veces "{{{}}}"", pero obtenemos su string y es lo que se envia al request
    const [lider, setLider] = useState(proyecto.lider)
    const [informacion_adicional, setInfoAd] = useState(proyecto.infoAd)
    //const [image, setImagen] = useState('')
    const [url_imagen, setImagenUrl] = useState('')

    // FUNCIONES:
    function resetStates() {
        setFechaInicio('')
        setFechaFin('')
        setTitulo('')
        setDescripcion('')
        setObjetivo('')
        setLider('')
        setInfoAd('')
        //setImagen('')
        setImagenUrl('')
    }
    
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
    const handleModalClose = () => {
        onActivarForm()
    };


    const onSubmit = (event) => {
        event.preventDefault() // To avoid submitting to an actual page
        const lideres = [lider]
        const objetivos = [objetivo]
        const newEstado = findLabel("estado")
        debugger
        const proyectoEditar = {
            id: proyecto.id,
            fechaInicio: fechaInicio,
            fechaFin: fechaFin,
            titulo: titulo,
            descripcion: descripcion,
            objetivo: objetivos,
            lider: lideres,
            estado: newEstado,
            categoria: categoria,
            informacion_adicional: informacion_adicional,
            //image: image,
            url_imagen: url_imagen
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
    const onChangeCategoria = (e) => {setCategoriaId(e.target.value)}
    const onChangeEstado = (e) => {setEstadoId(e.target.value)}
    const onChangeInfoAd = (e) => {setInfoAd(e.target.value)}
    //const onChangeImagen = (e) => {setImagen(e.target.value)}
    const onChangeImagenUrl = (e) => {setImagenUrl(e.target.value)}
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

    // COMPONENTS:
    const botonCancelarFormulario = 
        <Button onClick={onActivarForm}>
            <FontAwesomeIcon className="cancel-icon" icon={faTimes}/>
        </Button>;	
        
    const body = (
        <div style={modalStyle} className="paper-crear">
            <form  onSubmit={handleSubmit(onSubmit2)}>
                {botonCancelarFormulario}
                <div className="crear-container-title">
                    <h4>Editar Proyecto</h4>
                </div>
                <div style={{padding: "1% 3% 0 2%"}}>
                    <InputLabel style={{fontSize: "17px", padding:"10px 0px 0px 10px"}}>Fecha de Inicio</InputLabel>
                    <InputTexto type="date"
                                value={fechaInicio}
                                onChange={onChangeFechaInicio}
                                />
                    <InputLabel style={{fontSize: "17px", padding:"10px 0px 0px 10px"}}>Fecha de Fin</InputLabel>
                    <InputTexto type="date"
                                value={fechaFin}
                                onChange={onChangeFechaFin}
                                />
                    {/*NOTE: TITULO*/}
                    <InputLabel style={{fontSize: "17px", padding:"10px 0px 0px 10px"}}>Nombre del Proyecto</InputLabel>
                    <div className='form-control-proy'>
                        <input type="text"
                            placeholder='Nombre del proyecto'
                            {...register('titulo', {required: true})}
                            value={titulo}
                            onChange={onChangeTitulo}
                        />
                        {errors.titulo && estilosValidar()}
                    </div>
                    {/*NOTE: DESCRIPCION*/}
                    <InputLabel style={{fontSize: "17px", padding:"10px 0px 0px 10px"}}>Descripción</InputLabel>
                    <div className='form-control-proy'>
                        <input type="text"
                            placeholder='Descripción'
                            {...register('descripcion', {required: true})}
                            value={descripcion}
                            onChange={onChangeDescrip}
                        />
                        {errors.descripcion && estilosValidar()}
                    </div>
                    {/*NOTE: OBJETIVO*/}
                    <InputLabel style={{fontSize: "17px", padding:"10px 0px 0px 10px"}}>Objetivo</InputLabel>
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
                    <label>
                        Imagen por Link
                    </label>
                    <InputTexto
                        type="text" 
                        name="image" 
                        value={url_imagen}
                        onChange={onChangeImagenUrl}
                    />
                    <div className="btn-crear-container">
                        <input type='submit' value='GUARDAR CAMBIOS' className='btn-proy-editar btn-proy-block'/>
                    </div>
                </div>
            </form>
            
        </div>);
        
    // RENDER:
    return (
        <div>
            <Modal
                open={mostrarFormEditar}
                onClose={handleModalClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                >
                {body}
            </Modal>
        </div>
        
    );
}

export default FormularioEditarProyecto

/*
<label>
                        Imagen por archivo
                    </label>
                    <InputTexto
                        type="file" 
                        name="image" 
                        value={image}
                        onChange={onChangeImagen}
                    />
*/
// Componentes: 
import InputTexto from '../moleculas/InputTexto'
// Librerias-Paquetes:
import '../moleculas/FormularioCrearProyecto.css'
//import {VARIABLES} from '../organismos/variables-compartidas'
import { useState } from "react"
import React from 'react';
import { Button, Modal} from '@material-ui/core';
//import { Button, Modal, FormData, FormControl, MenuItem, Select, InputLabel} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useForm, /*SubmitHandler,*/ FormProvider } from "react-hook-form";
import DynamicDropdown from '../moleculas/DynamicDropdown'
const estados = [
    {value: 10, label: "CONCLUIDO", bool: false},
    {value: 20, label: "EN CURSO", bool: true}
]


function FormularioCrearProyecto({ onCrearProy, onActivarForm, mostrarFormCrear, lideres, categorias}) {
    const methods = useForm()
    // States
    const [fechaInicio, setFechaInicio] = useState('')
    const [fechaFin, setFechaFin] = useState('')
    const [titulo, setTitulo] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [objetivo, setObjetivo] = useState('')
    const [lider, setLider] = useState('1')
    const [categoria, setCategoria] = useState('1')
    const [estado, setEstado] = useState(20)
    const [informacion_adicional, setInfoAd] = useState('')
    //const [image, setImagen] = useState('')
    const [url_imagen, setImagenUrl] = useState('')


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
        //setImagen('')
        setImagenUrl('')
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
            if (!titulo) agregarRequerido(event.currentTarget[3])
            if (!descripcion) agregarRequerido(event.currentTarget[4])
            if (!objetivo) agregarRequerido(event.currentTarget[5])
            if (!lider) agregarRequerido(event.currentTarget[6])
            if (!categoria) agregarRequerido(event.currentTarget[7])
            return false
        }
        return true
    }

    const onSubmit = (data) => {
        //debugger
        const estadoActual = estados.find(est => est.value === estado)
        const categoriaActual = categorias.find(catego => catego.id === categoria)
        const liderActual = lideres.find(lid=> lid.id===lider)
        data.estado = estadoActual.bool
        data.categoria = categoriaActual.tipo
        data.lider = liderActual.nombre
        /*event.preventDefault() // To avoid submitting to an actual page
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
            estado: true,
            categoria: categoria,
            informacion_adicional: informacion_adicional,
            //image: image,
            url_imagen: url_imagen
        }*/
//
        onCrearProy(data) // callback invocation
        resetStates()
        onActivarForm() // Oculta el formulario
    }

    const onChangeFechaInicio = (e) => {setFechaInicio(e.target.value)}
    const onChangeFechaFin = (e) => {setFechaFin(e.target.value)}
    const onChangeTitulo = (e) => {setTitulo(e.target.value); removerRequerido(e.target)}
    const onChangeDescrip = (e) => {setDescripcion(e.target.value); removerRequerido(e.target)}
    const onChangeObjetivo = (e) => {setObjetivo(e.target.value); removerRequerido(e.target)}
    const onChangeLider = (e) => {setLider(e.target.value);}
    const onChangeCategoria = (e) => {setCategoria(e.target.value);}
    const onChangeEstado = (e) => {setEstado(e.target.value)}
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
            <FormProvider {...methods}>
                <form  onSubmit={methods.handleSubmit(onSubmit)}  enctype="multipart/form-data">
                    {botonCancelarFormulario}
                    <div className="crear-container-title">
                        <h4>Crear Proyecto</h4>
                    </div>
                    <div style={{padding: "1% 3% 0 5%"}}>
                        <InputTexto type="date"
                                    tituloLabel={"Fecha de Fin"}
                                    nameId="fecha_fin"
                                    value={fechaInicio}
                                    onChange={onChangeFechaInicio}
                                    />
                        <InputTexto type="date"
                                    tituloLabel={"Fecha de Inicio"}
                                    nameId="fecha_inicio"
                                    value={fechaFin}
                                    onChange={onChangeFechaFin}
                                    />
                        <InputTexto type="text"
                                    tituloLabel={"Nombre del Proyecto"}
                                    placeHolder='Nombre del proyecto'
                                    nameId="titulo"
                                    value={titulo}
                                    onChange={onChangeTitulo}
                                    />
                        <InputTexto type="text"
                                    placeHolder='Descripción'
                                    tituloLabel={"Descripción"}
                                    nameId="descripcion"
                                    value={descripcion}
                                    onChange={onChangeDescrip}
                                    />
                        <InputTexto type="text"
                                    tituloLabel={"Objetivo"}
                                    nameId="objetivo"
                                    placeHolder='Objetivo'
                                    value={objetivo}
                                    onChange={onChangeObjetivo}
                                    />
                        <DynamicDropdown titulo="Lideres"
                                        elements={lideres}
                                        value={lider}
                                        onChange={onChangeLider}
                                        idField={'id'}
                                        labelField={'nombre'}
                        />
                        <DynamicDropdown titulo="Categorias"
                                        elements={categorias}
                                        value={categoria}
                                        onChange={onChangeCategoria}
                                        idField={'id'}
                                        labelField={'tipo'}
                        />
                        <DynamicDropdown titulo="Estados"
                                        elements={estados}
                                        value={estado}
                                        onChange={onChangeEstado}
                                        idField={'value'}
                                        labelField={'label'}/>


                        {/*<InputTexto type="text"
                                    nameId="lider"
                                    placeHolder='Líder'
                                    value={lider}
                                    onChange={onChangeLider}
                                    />
                        
                         
                        <InputTexto type="text"
                                    nameId="categoria"
                                    placeHolder='Categoría'
                                    value={categoria}
                                    onChange={onChangeCategoria}
                                    />
                        <InputTexto type="text"
                                    nameId="estado"
                                    placeHolder='Estado'
                                    value={estado}
                                    onChange={onChangeEstado}
                                    />*/}
                        <InputTexto type="link"
                                        tituloLabel="Información Adicional"
                                        nameId="informacion_adicional"
                                    placeHolder='Información Adicional'
                                    value={informacion_adicional}
                                    onChange={onChangeInfoAd}
                                    />
                        
                        <label>
                            Imagen por Link
                        </label>
                        <InputTexto
                            type="text" 
                            tituloLabel="Imagen por Link"
                            nameId="image_url"
                            name="image" 
                            value={url_imagen}
                            onChange={onChangeImagenUrl}
                        />
                        <div className="btn-crear-container">
                            <input type='submit' value='CREAR PROYECTO' className='btn-proy-crear btn-proy-block'/>
                            
                        </div>
                    </div>
                </form>
            </FormProvider>
            
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
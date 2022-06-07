import InputTexto from '../moleculas/InputTexto'
import '../moleculas/FormularioCrearProyecto.css'
import { useState } from "react"
import React from 'react';
import { Modal} from '@material-ui/core';
import { useForm, FormProvider } from "react-hook-form";
import DynamicDropdown from '../moleculas/DynamicDropdown'
import MyButton from "../../button";
import MyInputText from "../../inputText";

const estados = [
    {value: 10, label: "CONCLUIDO", bool: false},
    {value: 20, label: "EN CURSO", bool: true}
]


function FormularioCrearProyecto({ onCrearProy, onActivarForm, mostrarFormCrear, lideres, categorias}) {
    const methods = useForm()
    // HOOKS:
    // State fields:
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
    // Modal/popup styles:
    const [modalStyle] = React.useState(getModalStyle);


    // FUNCIONES:
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
    
    const handleClose = () => {
        onActivarForm()
    };


    const onChangeFechaInicio = (e) => {setFechaInicio(e.target.value)}
    const onChangeFechaFin = (e) => {setFechaFin(e.target.value)}
    const onChangeTitulo = (e) => {setTitulo(e.target.value)}
    const onChangeDescrip = (e) => {setDescripcion(e.target.value)}
    const onChangeObjetivo = (e) => {setObjetivo(e.target.value)}
    const onChangeLider = (e) => {setLider(e.target.value);}
    const onChangeCategoria = (e) => {setCategoria(e.target.value);}
    const onChangeEstado = (e) => {setEstado(e.target.value)}
    const onChangeInfoAd = (e) => {setInfoAd(e.target.value)}
    //const onChangeImagen = (e) => {setImagen(e.target.value)}
    const onChangeImagenUrl = (e) => {setImagenUrl(e.target.value)}
    
    const onSubmit = (data) => {
        const estadoActual = estados.find(est => est.value === estado)
        const categoriaActual = categorias.find(catego => catego.id === categoria)
        const liderActual = lideres.find(lid=> lid.id===lider)
        data.estado = estadoActual.bool
        data.categoria = categoriaActual.tipo
        data.lider = liderActual.nombre
        
        onCrearProy(data) // callback invocation
        resetStates()
        onActivarForm() // Oculta el formulario
    }

    
    // COMPONENTES:
    const botonCancelarFormulario =
        <MyButton
            onClick={onActivarForm}
            className="cancel-icon">
        </MyButton>;
    
    const body = (
        <div style={modalStyle} className="paper-crear">
            <FormProvider {...methods}>
                <form  onSubmit={methods.handleSubmit(onSubmit)}  /*enctype="multipart/form-data"*/>
                    {botonCancelarFormulario}
                    <div className="crear-container-title" >
                        <h4>Crear Proyecto</h4>
                    </div>
                    <div style={{padding: "1% 3% 0 5%"}}>
                        <InputTexto type="date"
                                    tituloLabel={"Fecha de Inicio"}
                                    nameId="fecha_inicio"
                                    value={fechaFin}
                                    onChange={onChangeFechaFin}
                                    options={{required: true, title:"Se requiere una Fecha de inicio"}}
                                    />
                        <InputTexto type="date"
                                    tituloLabel={"Fecha de Fin"}
                                    nameId="fecha_fin"
                                    value={fechaInicio}
                                    onChange={onChangeFechaInicio}
                                    />
                        <MyInputText
                            id="titulo"
                            value={titulo}
                            onChange={onChangeTitulo}
                            placeholder='Nombre del proyecto'
                            />
                        <MyInputText
                            id="descripcion"
                            value={descripcion}
                            onChange={onChangeDescrip}
                            placeholder='Descripción'
                            />
                        <MyInputText
                            id="objetivo"
                            value={objetivo}
                            onChange={onChangeObjetivo}
                            placeholder='Objetivo'
                            />
                        <DynamicDropdown titulo="Lideres"
                                        elements={lideres}
                                        value={lider}
                                        onChange={onChangeLider}
                                        idField={'id'}
                                        labelField={'nombre'}
                                        options={{required: true, title:"Se requiere un lider de Proyecto"}}
                        />
                        <DynamicDropdown titulo="Categorias"
                                        elements={categorias}
                                        value={categoria}
                                        onChange={onChangeCategoria}
                                        idField={'id'}
                                        labelField={'tipo'}
                                        options={{required: true, title:"Se requiere una Categoria"}}
                        />
                        <DynamicDropdown titulo="Estados"
                                        elements={estados}
                                        value={estado}
                                        onChange={onChangeEstado}
                                        idField={'value'}
                                        labelField={'label'}/>
                        <InputTexto type="link"
                                        tituloLabel="Información Adicional"
                                        nameId="informacion_adicional"
                                    placeHolder='Información Adicional'
                                    value={informacion_adicional}
                                    onChange={onChangeInfoAd}
                                    options={{maxLength: 300}}
                                    />
                        <MyInputText
                            id="image_url"
                            value={url_imagen}
                            onChange={onChangeImagenUrl}
                            placeholder='Imagen por Link'
                            />
                        <div className="btn-crear-container">
                            <MyButton onClick={methods.handleSubmit(onSubmit)} className="default">
                                CREAR PROYECTO
                            </MyButton>
                        </div>
                    </div>
                </form>
            </FormProvider>
            
        </div>);
    
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
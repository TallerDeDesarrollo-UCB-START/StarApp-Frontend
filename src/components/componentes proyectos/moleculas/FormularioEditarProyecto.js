// Componentes:
import InputTexto from '../moleculas/InputTexto'
//import InputDropDown from "../atomos/InputDropDown";
// Librerias-Paquetes:
import '../moleculas/FormularioCrearProyecto.css'
import { useState } from "react"
import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import { Button, Modal, FormControl, MenuItem, Select, InputLabel } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useForm, /*SubmitHandler,*/ FormProvider } from "react-hook-form";


function FormularioEditarProyecto({ onEditarProy, onActivarForm, proyecto, mostrarFormEditar, lideres, categorias }) {

    const methods = useForm()
    // CONSTANTES:
    const estados = [
        {value: 10, label: "CONCLUIDO", bool: false},
        {value: 20, label: "EN CURSO", bool: true}
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
    const [objetivo, setObjetivo] = useState(proyecto.objetivo)//objetivo es un array en backend que esta nesteado 3 veces "{{{}}}"", pero obtenemos su string y es lo que se envia al request
    const [lider, setLider] = useState(proyecto.lider)
    const [informacion_adicional, setInfoAd] = useState(proyecto.infoAd)
    const [url_imagen, setImagenUrl] = useState(proyecto.url_imagen)
    // States dropwdown values
    const [estadoId, setEstadoId] = useState(findValue("estado"))
    const [categoriaId, setCategoriaId] = useState(findValue("categoria"))/*parseInt(categorias[0].id)*/
    // Modal popup styles
    const [modalStyle] = React.useState(getModalStyle);
    //alert(categoriaId)
    

    // FUNCIONES:
    function resetStates() {
        setFechaInicio('')
        setFechaFin('')
        setTitulo('')
        setDescripcion('')
        setObjetivo('')
        setLider('')
        setInfoAd('')
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

    const onChangeFechaInicio = (e) => {setFechaInicio(e.target.value)}
    const onChangeFechaFin = (e) => {setFechaFin(e.target.value)}
    const onChangeTitulo = (e) => {setTitulo(e.target.value)}
    const onChangeDescrip = (e) => {setDescripcion(e.target.value)}
    const onChangeObjetivo = (e) => {setObjetivo(e.target.value)}
    const onChangeLider = (e) => {setLider(e.target.value)}
    const onChangeCategoria = (e) => {setCategoriaId(e.target.value)}
    const onChangeEstado = (e) => {setEstadoId(e.target.value)}
    const onChangeInfoAd = (e) => {setInfoAd(e.target.value)}
    const onChangeImagenUrl = (e) => {setImagenUrl(e.target.value)}

    function findValue(tipo){
        if(tipo==="estado"){
            const selectEstado = proyecto.estado===true?  estadoEnCursoValor : estadoAcabadoValor
            return selectEstado
        }
        if(tipo === "categoria")
        {
            const foundCategoria = categorias.find(catego => catego.tipo === proyecto.categoria)
            const selectCategoria = parseInt(foundCategoria.id)
            return selectCategoria
        }
        //NOTE: Completar con los ifs que hagan falta para diferentes values de  dropdowns
    }
    
    function estilosValidar(){
        //FIXME: Falta agregar validacion con useForm para campos de texto y ver como validar dropdowns.
        console.log('hubo algun error')
    }

    const onSubmit2 = data => {
        //debugger
        console.log(data)
        const estadoActual = estados.find(estado => estado.value === estadoId)
        const categoriaActual = categorias.find(catego => parseInt(catego.id) === categoriaId)
        data.id = proyecto.id
        data.estado = estadoActual.bool
        data.categoria = categoriaActual.tipo
        onEditarProy(data) // callback invocation
        resetStates()
        onActivarForm() // Oculta/Activa el formulario
        // NOTE: Los valores de dropdown se mapean y agregan al objeto "data" sin usar react-hook-form.
        //       Los demas campos si utilizan react-hook-form.

    }

    // COMPONENTS:
    const botonCancelarFormulario = 
        <Button onClick={onActivarForm}>
            <FontAwesomeIcon className="cancel-icon" icon={faTimes}/>
        </Button>;	
        
    const body = (
        <div style={modalStyle} className="paper-crear">
            <FormProvider {...methods}>
                <form  onSubmit={methods.handleSubmit(onSubmit2)}>
                    {botonCancelarFormulario}
                    {/*NOTE: FORM TITLE*/}
                    <div className="crear-container-title">
                        <h4>Editar Proyecto</h4>
                    </div>
                    {/*NOTE: FORM FIELDS:*/}
                    <div style={{padding: "1% 3% 0 2%"}}>
                        {/*NOTE: FECHA INICIO*/}
                        <InputTexto type="date"
                                    tituloLabel={"Fecha de Inicio"}
                                    nameId="fechaInicio"
                                    value={fechaInicio}
                                    onChange={onChangeFechaInicio}
                                    estilosValidar={estilosValidar}
                                    />
                        {/*NOTE: FECHA FIN*/}
                        <InputTexto type="date"
                                    tituloLabel={"Fecha de Fin"}
                                    nameId="fechaFin"
                                    value={fechaFin}
                                    onChange={onChangeFechaFin}
                                    estilosValidar={estilosValidar}
                                    />
                        {/*NOTE: TITULO*/}
                        <InputTexto type="text"
                                    tituloLabel={"Nombre del Proyecto"}
                                    placeHolder="Nombre del Proyecto"
                                    nameId="titulo"
                                    value={titulo}
                                    onChange={onChangeTitulo}
                                    options={{required: true}}
                                    estilosValidar={estilosValidar}/>
                        {/*NOTE: DESCRIPCION*/}
                        <InputTexto type="text"
                                    tituloLabel={"Descripción"}
                                    placeHolder="Descripción"
                                    nameId="descripcion"
                                    value={descripcion}
                                    onChange={onChangeDescrip}
                                    options={{required: true}}
                                    estilosValidar={estilosValidar}/>
                        {/*NOTE: OBJETIVO*/}
                        <InputTexto type="text"
                                    tituloLabel={"Objetivo"}
                                    placeHolder="Objetivo"
                                    nameId="objetivo"
                                    value={objetivo}
                                    onChange={onChangeObjetivo}
                                    options={{required: true}}
                                    estilosValidar={estilosValidar}/>
                        {/*NOTE: Dropwdown LIDER*/}
                        <div className='form-control-proy' style={{marginBottom: "20px"}}>
                            <FormControl sx={{ m: 1, minWidth: 120 }}className='dropdown-proyectos'>
                                <InputLabel style={{fontSize: "17px", padding:"10px 0px 0px 10px"}}>Líder</InputLabel>
                                <Select className='dropdown-proyectos'
                                        value={lider}
                                        onChange={onChangeLider}>
                                    <MenuItem value=""><em>Ninguno</em></MenuItem>
                                    {
                                        lideres.map(lista=>(
                                            <MenuItem value={lider}>{lista.nombre}</MenuItem>
                                            
                                        ))
                                    }
                                </Select>
                            </FormControl>
                        </div>
                        {/*NOTE: Dropwdown CATEGORIAS*/}
                        <div className='form-control-proy' style={{marginTop: "20px", marginBottom: "20px"}}>
                            <FormControl sx={{ m: 1, minWidth: 120 }}className='dropdown-proyectos'>
                                <InputLabel style={{fontSize: "17px", padding:"10px 0px 0px 10px"}}>Categorías</InputLabel>
                                <Select className='dropdown-proyectos'
                                value={categoriaId}
                                onChange={onChangeCategoria}
                                >
                                    {
                                    categorias.map(categ=>(
                                        <MenuItem value={parseInt(`${categ.id}`) }>{categ.tipo}</MenuItem>
                                    ))
                                    }
                                </Select>
                            </FormControl>
                        </div>
                        {/*NOTE: Dropwdown ESTADO*/}
                        <div className='form-control-proy' style={{marginTop: "20px", marginBottom: "20px"}}>
                            <FormControl sx={{ m: 1, minWidth: 120 }} className='dropdown-proyectos'>
                                <InputLabel style={{fontSize: "17px", padding:"10px 0px 0px 10px"}}>Estado</InputLabel>
                                <Select className='dropdown-proyectos'
                                value={estadoId}
                                onChange={onChangeEstado}>
                                    <MenuItem value={estadoEnCursoValor}>{estadoEnCursoLabel}</MenuItem>
                                    <MenuItem value={estadoAcabadoValor}>{estadoAcabadoLabel}</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        {/*NOTE: INFO ADICIONAL*/}
                        <InputTexto type="link"
                                    tituloLabel="Información Adicional"
                                    nameId="informacion_adicional" 
                                    placeHolder='Información Adicional'
                                    value={informacion_adicional}
                                    onChange={onChangeInfoAd}
                                    estilosValidar={estilosValidar}/>
                        <InputTexto type="text" 
                                    tituloLabel="Imagen por Link"
                                    nameId="url_imagen" 
                                    value={url_imagen}
                                    onChange={onChangeImagenUrl}
                                    //options={{required: true}}
                                    estilosValidar={estilosValidar}/>
                        <div className="btn-crear-container">
                            <input type='submit' value='GUARDAR CAMBIOS' className='btn-proy-editar btn-proy-block'/>
                        </div>
                    </div>
                </form>
            </FormProvider>
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

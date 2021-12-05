import '../moleculas/FormularioCrearProyecto.css'
import { FormControl, MenuItem, Select, InputLabel } from '@material-ui/core';
import { useState } from "react"

function DynamicDropdown({ elements, value, onChange, idField, labelField, titulo }) {

    function getElementId(element){
        const elementId = element[idField] === "string"? parseInt(element[idField]) : element[idField]
        console.log(elementId)
        return elementId
    }
    // RENDER:
    return (
        <div>
            {/*NOTE: Dropwdown CATEGORIAS*/}
            <div className='form-control-proy' style={{marginTop: "20px", marginBottom: "20px"}}>
                <FormControl sx={{ m: 1, minWidth: 120 }}className='dropdown-proyectos'>
                    <InputLabel style={{fontSize: "17px", padding:"10px 0px 0px 10px"}}>{titulo}</InputLabel>
                    <Select className='dropdown-proyectos'
                    value={value}
                    onChange={onChange}
                    >
                        {
                        elements.map(element => (
                            <MenuItem value={ getElementId(element) }>{element[labelField]}</MenuItem>
                        ))
                        }
                    </Select>
                </FormControl>
            </div>
        </div>
        
    );
}

export default DynamicDropdown


/*function<div className='form-control-proy' style={{marginTop: "20px", marginBottom: "20px"}}>
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
                        */

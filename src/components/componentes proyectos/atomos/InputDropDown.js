// Componentes:
// Librerias-Paquetes:
import * as React from 'react';
import { Select, MenuItem, FormControl, Box } from '@material-ui/core';
//import Box from '@material-ui/core';
import '../moleculas/FormularioCrearProyecto.css'

function InputDropDown({labelId, input_id, label, items, onChangeEstado, valueSelect}) {
    
    /*function renderItems() {
        //debugger;
        let valuecont = 10
        items.map(item => {
            //debugger;
            <MenuItem value={valuecont}>{item}</MenuItem>
            valuecont += 10
        })
    }*/
    //debugger;
    //const menuItems = renderItems()
    //console.log(menuItems)
    return (
        <Box className='form-control-proy'>
            <FormControl fullWidth>
                <Select
                labelId= {labelId}
                id={input_id}
                value={valueSelect}
                label={label}
                onChange={onChangeEstado}
                >
                    {/*renderItems()*/}
                    <MenuItem value={10}>Activo</MenuItem>
                    <MenuItem value={20}>Acabado</MenuItem>
                </Select>
            </FormControl>
        </Box>
        
    )
}

export default InputDropDown

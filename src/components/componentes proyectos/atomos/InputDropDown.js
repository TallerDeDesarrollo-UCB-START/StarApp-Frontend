// Componentes:
// Librerias-Paquetes:
import * as React from 'react';
import { Select, MenuItem, FormControl, Box } from '@material-ui/core';
//import Box from '@material-ui/core';
import '../moleculas/FormularioCrearProyecto.css'

function InputDropDown({labelId, input_id, label, items, onChangeEstado, valueSelect, classes}) {
    const valor1 = items[0].valor
    const valor2 = items[1].valor
    const estado1 = "CONCLUIDO"//items[0].estado
    const estado2 = "EN CURSO"//items[1].estado
    return (
        <Box className='form-control-proy'>
            <FormControl fullWidth>
                <Select
                labelId= {labelId}
                id={input_id}
                value={valueSelect}
                label={label}
                onChange={onChangeEstado}
                className={classes.drpdown}
                >
                    {/*renderItems()*/}
                    <MenuItem value={valor1}>{estado1}</MenuItem>
                    <MenuItem value={valor2}>{estado2}</MenuItem>
                </Select>
            </FormControl>
        </Box>
        
    )
}

export default InputDropDown

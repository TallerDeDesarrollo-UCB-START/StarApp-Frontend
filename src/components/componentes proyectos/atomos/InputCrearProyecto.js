// Componentes:

// Librerias-Paquetes:
import { Box, colors } from '@material-ui/core';
import {TextField, Text} from '@material-ui/core';

function InputCrearProyecto(name) {
    return (
        <Box sx={{ m: 5 }}>
            <h  style={{padding:"50px", alignItems:"center"}}>{name.name}:</h><TextField id="standard-basic" label={name.name} variant="standard" margin="none" />
        </Box>
    )
}

export default InputCrearProyecto
// Componentes:

// Librerias-Paquetes:
import { Chip } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";

// Styles
const useStyles = makeStyles({
    chip: {
        margin: 'auto',
        marginRight: '5px',
        width: '22%'
    },
});


function handleClick(){}

function ContenidoProyecto() {
    const classes = useStyles();
    return (
        <Chip  label="Participando"
                color="primary"
                onClick={handleClick} 
                className={classes.chip}/>
    );
}

export default ContenidoProyecto
// Componentes:
//import './ParticiparEnProyectoBtn.css';
// Librerias-Paquetes:
import React from "react";
import { Button, Box } from '@material-ui/core';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import LockIcon from '@material-ui/icons/Lock';

const ParticipateButton = withStyles((theme) => ({
    root: {
        backgroundColor: "#269BD5",
        height: 51,
        width: 119,
        fontSize: 16,
    },
}))(Button);

const useStyles = makeStyles({
    contenedorBtn: {
        display: 'flex',
        alignItems: 'center',
        gap: '8%'
    },
});

function ParticiparEnProyectoBtn( {proyecto,  onPartiparProy, onAsignarSnackbarStatus, onAsignarParticipacion}) {
    const classes = useStyles()

    const onClick = async (event) => {
        if(proyecto){
            if(proyecto.estado === "ACABADO" || proyecto.estado === "CONCLUIDO"){
                onAsignarSnackbarStatus("Participacion bloqueada", true, false);
                return
            } else{
                const participarResponse = await onPartiparProy(proyecto.id)
                if(participarResponse){
                    onAsignarParticipacion();
                    onAsignarSnackbarStatus("Participacion exitosa", true, true);
                }else{
                    onAsignarParticipacion();
                    onAsignarSnackbarStatus("Participacion fallida", true, false);
                }
            }
        }
    }
    /*QUE EL TITULO DIGA PROYECTOS PASADOS
    QUIZAS HACER DESAPARECER EL BOTON DE PROYECTOS PASADOS CUANDO SE ESTA EN LA VISTA DE PROYECTOS PASADOS
    OPCIONALMENTE MOVER EL BOTON DE VOLVER ATRAS DE KEVIN*/
    const candado = proyecto && proyecto.estado === "ACABADO"? <LockIcon/> : ""
    return (
        <div>
            <div id={proyecto.id}>
                <ParticipateButton variant="contained"
                                    color="primary"
                                    onClick={onClick}>
                    <Box className={classes.contenedorBtn}>
                        Unirme
                        {candado}
                    </Box>
                </ParticipateButton>
            </div>
        </div>
    );
}



export default ParticiparEnProyectoBtn
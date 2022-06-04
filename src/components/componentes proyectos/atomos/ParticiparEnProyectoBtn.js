import React from "react";
import { Box } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import {VARIABLES} from '../organismos/variables-compartidas'
import { makeStyles } from "@material-ui/core/styles";
import MyButton from "../../../shared/components/Button";

const useStyles = makeStyles({
    contenedorBtn: {
        display: 'flex',
        alignItems: 'center',
        gap: '8%'
    },
    contenedorBtnPasado: {
        display: 'flex',
        alignItems: 'center',
        gap: '8%',
        backgroundColor: "#a8a8a8",
        "&:hover": {
            backgroundColor: "#818181",
        },
    },
});

const varProyectos = VARIABLES.datosProyectos

function ParticiparEnProyectoBtn( {proyecto,  onPartiparProy, onAsignarSnackbarStatus, onAsignarParticipacion, onAvisoAccion}) {
    const classes = useStyles()

    const onClick = async (event) => {
        if(proyecto){
            if(proyecto.estado === varProyectos.estadoAcabado){
                onAsignarSnackbarStatus("Participacion bloqueada", true, false);
                onAvisoAccion()
            } else{
                const participarResponse = await onPartiparProy(proyecto.id)
                if(participarResponse){
                    onAsignarParticipacion();
                    onAsignarSnackbarStatus("Participacion exitosa", true, true);
                    onAvisoAccion()
                }else{
                    onAsignarParticipacion();
                    onAsignarSnackbarStatus("Participacion fallida", true, false);
                    onAvisoAccion()
                }
            }
        }
    }
    /*OPCIONALMENTE MOVER EL BOTON DE VOLVER ATRAS DE KEVIN*/
    const isPastProject = proyecto && proyecto.estado === varProyectos.estadoAcabado
    return (
        <div>
					<div id={proyecto.id}>
						{!isPastProject && (
							<MyButton className="default" onClick={onClick}>
								Unirme
							</MyButton>
						)}
					</div>
        </div>
    );
}

export default ParticiparEnProyectoBtn
import React from "react";
import MyButton from '../../../shared/components/Button';

function CancelarParticipacionBtn( {proyecto, onCancelarParticipacion, onAsignarSnackbarStatus, onAsignarParticipacion, onAvisoAccion}) {

    const onClick = async (event) => {
        const cancelResponse = await onCancelarParticipacion(proyecto.id);
        if(cancelResponse){
            onAsignarParticipacion();
            onAsignarSnackbarStatus("Participacion cancelada", true, true);
            onAvisoAccion()
        }else{
            onAsignarParticipacion();
            onAsignarSnackbarStatus("Participacion no cancelada", true, false);
            onAvisoAccion()
        }
    }

    return (
      <MyButton
				className="cancel"
				onClick={onClick}>
					Dejar Proyecto
			</MyButton>
    );
}

export default CancelarParticipacionBtn
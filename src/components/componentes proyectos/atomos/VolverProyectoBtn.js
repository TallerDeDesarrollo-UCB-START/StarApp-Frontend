
// Librerias-Paquetes-Estilos:
import { Button} from '@material-ui/core';
import {useHistory} from "react-router-dom"
import {withStyles} from "@material-ui/core/styles";
import { IconButton } from '@material-ui/core';


function VolverProyectoBtn() {
    let history = useHistory();
    const texto="< Volver"
    return (
        <AtrasButton variant="outlined" onClick={() => history.goBack()}> {texto}</AtrasButton>
    )
}
const AtrasButton = withStyles((theme) => ({
    root: {
      color: "black",
      whiteSpace: 'nowrap',
      minWidth: "5%",
      width: '10%',
      textAlign: 'center',
      borderRadius: 20,
      alignItems:"right"
    },
  }))(Button);
export default VolverProyectoBtn
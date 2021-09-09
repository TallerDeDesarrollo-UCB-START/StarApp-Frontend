import {Box} from '@material-ui/core';
import Proyecto from './Proyecto';

function Proyectos(proyectos) {
    return (
        <div>
            <Box  style={styles}>
                {
                    proyectos.map(proyecto => (
                        <Proyecto key={proyecto.id} proyecto={proyecto} />
                    ))
                }
            </Box>
        </div>
    );
}

const styles = {
    border:"4px solid blue",
    marginTop:"5%"
}

export default Proyectos;
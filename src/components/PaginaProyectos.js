import Proyectos from "./Proyectos"
import {Container} from '@material-ui/core';

function PaginaProyectos(datos) {
    return (
        <div>
            {/*Header*/}
            <Container  style={contstyles}>
                {/*Titulo*/}
                <h1 style={h1styles}>TITULO</h1> 
                <Proyectos datos={datos}/>
            </Container>
            {/*Footer*/}
        </div>
    );
}

export default PaginaProyectos;

const contstyles={border:"4px solid skyblue"}

const h1styles={
    marginTop:"2%",
    textAlign:"center"

}
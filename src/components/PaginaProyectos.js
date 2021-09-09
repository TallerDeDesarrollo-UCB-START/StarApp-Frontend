import Proyectos from "./Proyectos"
import {Container} from '@material-ui/core';

function PaginaProyectos({proyectos}) {
    
    
    return (
        <div>
            {/*Header*/}
            <Container >
                {/*Titulo*/}
                <h1 style={h1styles}>PROYECTOS</h1> 
                <Proyectos proyectos={proyectos}/>
            </Container>
            {/*Footer*/}
        </div>
    );
}

export default PaginaProyectos;


const h1styles={
    marginTop:"2%",
    textAlign:"center"

}
// Componentes:
import CrearProyectoBtn from '../atomos/CrearProyectoBtn'
// Librerias-Paquetes-Estilos: 
import './HeaderProyectos.css';


function HeaderProyectosAdmin({onActivarForm}) {
    return (
        <div className="header-container">
            <div className="borderHeader-conatiner"></div>
            <div className="textHeader-container">
                <h1>PROYECTOS</h1>
            </div>
            <CrearProyectoBtn onActivarForm={onActivarForm}/>
        </div>
    );
}

export default HeaderProyectosAdmin
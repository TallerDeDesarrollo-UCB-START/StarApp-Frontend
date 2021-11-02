// Componentes:
import './HeaderProyectos.css';
// Librerias-Paquetes:


function HeaderProyectos({tituloHeader}) {
    return (
        <div className="header-container">
            <div className="textHeader-container_normal">
            <h1>{`PROYECTOS ${tituloHeader}`}</h1>
            </div>
        </div>
    );
}

export default HeaderProyectos
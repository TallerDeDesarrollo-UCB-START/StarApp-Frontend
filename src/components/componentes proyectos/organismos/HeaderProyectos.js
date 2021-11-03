// Componentes:
import './HeaderProyectos.css';
// Librerias-Paquetes:


function HeaderProyectos({tituloHeader}) {
    const categoria = tituloHeader? tituloHeader : ''
    return (
        <div className="header-container">
            <div className="textHeader-container_normal">
            <h1>{`PROYECTOS ${categoria}`}</h1>
            </div>
        </div>
    );
}

export default HeaderProyectos
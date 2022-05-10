//States
import {useState, useEffect} from 'react'
import PaginaProyectos from './Proyectos'
import BadRequests from './redirect status/BadRequests'
function ProyectosContainer() {
    const [proyectos, setProyectos] = useState([])
    // HTTP requests & functions
    useEffect(() => {
      const getProyectos = async () => {
        const proyectosDelServer =  await fetchProyectos()
        setProyectos(proyectosDelServer)
      }
      getProyectos()
    }, [] )

    async function fetchProyectos() {
      try{
    
      const response = await fetch(URLProyectos)
      const data = await response.json()
      return data;
      } catch (error) {
        let message = BadRequests(error.response.status);
        activeSnackbar(
          "No se ha enviado el correo de recuperación, "+message,
          "error",
          () => {}
        );
      }
    }
    //Elements
    let componenteProyectos = <PaginaProyectos proyectos={proyectos} />;
    let mensajeAlternativo = 'No Tasks To Show';
    let mostrarProyectos = proyectos.length > 0 ? componenteProyectos : mensajeAlternativo

  return (
    
    <div>
        {mostrarProyectos}
    </div>
    
  );
}

const url = process.env.REACT_APP_API
const URLProyectos = `${url}get_proyectos`

export default ProyectosContainer;

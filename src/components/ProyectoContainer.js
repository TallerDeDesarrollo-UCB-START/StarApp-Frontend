//States
import {useState, useEffect} from 'react'


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
      const response = await fetch(URLProyectos)
      const data = await response.json()
  
      return data;
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


const URLProyectos = 'http://localhost:5000/get_proyectos'

export default ProyectosContainer;

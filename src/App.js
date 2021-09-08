import PaginaProyectos from "./components/PaginaProyectos"
//import { makeStyles } from '@material-ui/core/styles';
//States
import {useState, useEffect} from 'react'
import Proyectos from "./components/Proyectos"

function App() {
  const [proyectos, setProyectos] = useState([])
    // HTTP requests & functions
    async function fetchProyectos() {
      const response = await fetch(URLProyectos)
      const data = await response.json()
  
      return data;
    }
    useEffect(() => {
      const getProyectos = async () => {
        const proyectosDelServer =  await fetchProyectos()
        setProyectos(proyectosDelServer)
      }

      getProyectos()
    }, [] )
    
  return (
    <div>
      <PaginaProyectos datos={proyectos}/>
    </div>
  );
}

export default App;

const URLProyectos = "http://localhost:5000/proyectos"


// Container:  lg=large  md=medium = sm=small xs=xtrasmall   fixed
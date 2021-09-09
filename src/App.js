import './App.css'
import Routes from './routes/Routes'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Profile from './components/Profile';
import Home from './components/Home';
import Header from './components/Header/Header';
import Footer from './components//Footer/Footer';

import PaginaProyectos from "./components/PaginaProyectos"
//States
import {useState, useEffect} from 'react'


function App() {
  // const location = useLocation()
  return (
    <Router>
      <Switch>
          {Routes.map(route => (
            <Route exact path={route.path} key={route.path}>
              <route.component />
            </Route>
          ))}
      </Switch>
    </Router>
  );
}

/*
function App() {
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
    
    <div className="container">
      <Router>
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
        

        <Route path='/' exact render={(props) => (
          <>
            {AddTaskComponent}
            {TasksComponent}
          </>
        )}/>

        <Route path='/about' component={About} />

        <Footer />
      </Router>
    </div>
    
  );
}


const URLProyectos = 'http://localhost:5000/proyectos'
*/
export default App;

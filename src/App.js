import Routes from './routes/Routes'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/header/header.jsx'
import {React, useState} from 'react'

//export var myContext = React.createContext()

function App() {
  const [sessionData, setSessionData] = useState({
    id: '1',
    role: 'voluntario'
  })
  // const location = useLocation()
  return (
    //<myContext.Provider value = {sessionData}>
      <Router>
        <Switch>
            {Routes.map(route => (
              <Route exact path={route.path} key={route.path}>
                <Header sessionData = {sessionData} setSessionData = {setSessionData}/>
                <route.component sessionData = {sessionData} setSessionData ={setSessionData}/>
              </Route>
            ))}
        </Switch>
      </Router>
    //</myContext.Provider>
  );
}

export default App;
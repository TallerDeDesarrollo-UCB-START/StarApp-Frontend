import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import EventsList from './components/EventsList';
import Event from './components/Event';
import Attendace from './components/Attendance'




function App() {
  // const location = useLocation()
  return (
    <Router>
      <div className="container">
        <h1>Navbar...</h1>

        <div>
          <Link to="/">Home</Link>
        </div>

        <div>
          <Link to="/events">Eventos</Link>
        </div>





        <Switch>

          <Route path="/events" exact>
            <EventsList />
          </Route>

          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/events/event" exact>
            <Event />
          </Route>

          <Route path="/events/event/attendance" exact>
            <Attendace />
          </Route>

        </Switch>

      </div>
    </Router>

  );
}

export default App;

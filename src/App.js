import './App.css'
import Routes from './routes/Routes'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
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

export default App;

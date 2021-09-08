import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Component/crearEvento.css";
import crearEvento from './Component/crearEvento';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={crearEvento} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

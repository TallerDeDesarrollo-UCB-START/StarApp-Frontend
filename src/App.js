import './App.css'
import Routes from './routes/Routes'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/header/header';
import Footer from './components//footer/footer';

function App() {
  // const location = useLocation()
  return (
    <Router>
      <Switch>
          {Routes.map(route => (
            <Route exact path={route.path} key={route.path}>
              <Header/>
              <route.component />
              <Footer/>
            </Route>
          ))}
      </Switch>
    </Router>
  );
}


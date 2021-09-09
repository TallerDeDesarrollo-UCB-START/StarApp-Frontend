import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Profile from './components/Profile';
import Home from './components/Home';
import FormEditP from './components/EditProfile/EditProfile';

const App = () => {

  return (
    <Router>

      {/* <div className="App"> */}
      <Profile />
      <FormEditP/>
      <Home />
      {/* </div> */}
    </Router >
  );
}

export default App;

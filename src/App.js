import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Profile from './components/Profile';
import Home from './components/Home';

function App() {
  return (
    <Router>

      <div className="App">
        <Profile />
        <Home />
      </div>
      <Route path='/profile' component={Profile} />
    </Router>
  );
}

export default App;

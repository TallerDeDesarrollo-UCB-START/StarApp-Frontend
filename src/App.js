
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Profile from './components/Profile';
import Home from './components/Home';
import Header from './components/Header/Header';
import Footer from './components//Footer/Footer';


const App = () => {

  return (
    <div>
      <div>
        <Router>
        <Header/>
        {/* <div className="App"> */}
        <Profile />
        <Home />
        {/* </div> */}
        </Router >
      </div>
      <Footer/>
    </div>
    
  );
}

export default App; 

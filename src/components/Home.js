import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Home = () => {
    const location = useLocation()
    return (
        <div>
            <Header/>
            <Footer/>
        </div>
    )
}

export default Home

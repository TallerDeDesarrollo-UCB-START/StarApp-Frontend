import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Header from './Header/Header';

const Home = () => {
    const location = useLocation()
    return (
        <div>
            <Header/>
        </div>
    )
}

export default Home

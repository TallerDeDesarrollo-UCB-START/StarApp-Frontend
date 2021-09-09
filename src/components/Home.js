import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Home = () => {
    const location = useLocation()
    return (
        <div>
            <h1>Bienvenidos a Home!</h1>
            <div>
                <Link to="/perfil">Ver Perfil</Link>
            </div>
            <div>
              <Link to="/events">Ver Eventos</Link>
            </div>
        </div>

    )
}

export default Home

import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Home = () => {
    const location = useLocation()
    return (
        <div>
            <h1>Bienvenidos a Home!</h1>
        </div>
    )
}

export default Home

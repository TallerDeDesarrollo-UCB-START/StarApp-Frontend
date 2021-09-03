import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Home = () => {
    const location = useLocation()
    return (
        <div>
            {location.pathname === '/' && (
                <header className="App-header">
                    <h3>Hello World</h3>
                </header>
            )}
        </div>
    )
}

export default Home

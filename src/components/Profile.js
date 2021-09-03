import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Profile = () => {
    const location = useLocation()
    return (
        <div>
            {location.pathname === '/' && (
                <Link to='/profile'>Profile</Link>
            )}
        </div>
    )
}

export default Profile

import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Button } from '@material-ui/core';
import './Profile.css';


const Profile = () => {
    const location = useLocation()
    return (
        <div>
            {location.pathname === '/' && (
                <Link to='/profile'>Perfil</Link>
            )}
            <div>
                {location.pathname != '/' && (
                    <div>

                        <div class="picture">


                        </div>
                        <div class="name">
                            <h2>Nombre completo</h2>
                            <p>Pequeña descripción de la persona</p>
                        </div>
                        <Button color="primary">Datos personales</Button>
                        <Button color="primary">Eventos asistidos</Button>
                        <div class="container">
                            <div class="btn-container">


                            </div>
                            <div class="gen-info-container">
                                <p><strong>Proyectos en los que participa:</strong></p>
                                <p><strong>Clasificación:</strong></p>
                                <p><strong>Horas acumuladas:</strong></p>
                                <p><strong>Insignias:</strong></p>
                            </div>
                        </div>

                    </div>


                )}
            </div>
        </div>

    )
}

export default Profile

import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

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
                        <h2>Nombre completo</h2>
                        <p>Pequeña descripción de la persona</p>
                        <button>Datos personales</button>
                        <button>Eventos asistidos</button>
                        <section class="container">
                            <div class="btn-container">
                                <h2>CUADRADO</h2>
                                <h2>CUADRADO</h2>
                                <h2>CUADRADO</h2>
                            </div>
                            <div class="gen-info-container">
                                <p>Proyectos en los que participa</p>
                                <p>Clasificación</p>
                                <p>Horas acumuladas</p>
                                <p>Insignias</p>
                            </div>
                        </section>

                    </div>


                )}
            </div>
        </div>

    )
}

export default Profile

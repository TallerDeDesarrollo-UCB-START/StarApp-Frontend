import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Button } from '@material-ui/core';
import './Profile.css';


var volunteer = {
    name: 'Juan',
    age: 25,
    event: 'El Agua es Oro'
}
function mostrarDatos() {
    document.getElementById('data').innerHTML = `<p><strong>Nombre </strong>${volunteer.name}</p> <p><strong>Edad </strong>${volunteer.age}</p>`
}
function mostrarEventos() {
    document.getElementById('data').innerHTML = `<p><strong>Eventos: </strong>${volunteer.event}</p>`
}
function editarDatos() {
    document.getElementById('data').innerHTML = `<p><strong>Editar datos </strong></p>`
}

const Profile = (onClick) => {
    const location = useLocation()
    return (
        <div class="container">

             
            <div>
                <div>
                    <div class="tabs">
                    <Link to='/' >Volver</Link>
                    </div> 
                    <div class="picture">
                    

                    </div>
                    
                    <div class="name">
                        
                        <h2>{volunteer.name}</h2>
                        <p>Pequeña descripción de la persona</p>
                        
                    </div>
                    <Button onClick={mostrarDatos} color="primary" borderRadius="20%">Datos personales</Button>
                    <Button onClick={mostrarEventos} color="primary" borderRadius="20%">Eventos asistidos</Button>
                    <Button onClick={editarDatos} color="primary" borderRadius="30%">Editar Datos</Button>
                    
                    
                    <div class="container">
                        <div class="btn-container" id="data">


                        </div>
                        <div class="gen-info-container">
                            <p><strong>Proyectos en los que participa:</strong></p>
                            <p><strong>Clasificación:</strong></p>
                            <p><strong>Horas acumuladas:</strong></p>
                            <p><strong>Insignias:</strong></p>
                        </div>
                    </div>

    

                </div>
            </div>
        </div>
    )
}

export default Profile
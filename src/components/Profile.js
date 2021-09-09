import React from 'react';
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { Modal } from '@material-ui/core';
import FormEditUser from "./FormEditUser"
import './Profile.css';
import FormEditPerfil from './EditProfile/EditProfile';

var volunteer={
    name: 'Juanito',
    age: 10,
    event: 'El Agua es bronce'
}




function showData() {
    document.getElementById('data').innerHTML = `<p><strong>Nombre </strong>${volunteer.name}</p> 
                                                 <p><strong>Edad </strong>${volunteer.age}</p>
                                                 `
}
function showEvents() {
    document.getElementById('data').innerHTML = `<p><strong>Eventos: </strong>${volunteer.event}</p>`
}


  
  function getModalStyle() {
    const top = 50 ;
    const left = 50 ;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  
  

const Profile = (onClick) => {


    const location = useLocation();
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    
      
    

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    const body = (
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Editar Usuario</h2>
            <FormEditUser volunteerst={volunteer} />
          
          
        </div>
    );

   
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
                            <h2>{volunteer.name}</h2>
                            <p>Pequeña descripción de la persona</p>
                            <Button type="button" onClick={handleOpen} variant="contained" color="primary" >Ver Perfil</Button>
                            
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="simple-modal-title"
                                aria-describedby="simple-modal-description"
                            >
                                {body}
                            </Modal>

                            <Button type="button" onClick={handleOpen} variant="contained" color="primary" >Editar Perfil</Button>
                            
                            
                        </div>

                        <Button onClick={showData} color="primary" borderRadius="20%">Datos personales</Button>
                        <Button onClick={showEvents} color="primary" borderRadius="20%">Eventos asistidos</Button>
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


                )}
            </div>
        </div>

    )
}

export default Profile



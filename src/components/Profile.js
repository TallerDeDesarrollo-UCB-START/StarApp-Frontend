import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Button } from '@material-ui/core';

import axios from "axios";


import { makeStyles } from '@material-ui/core/styles';
import { Modal } from '@material-ui/core';
//import FormEditUser from "./FormEditUser"
import './Profile.css';

var volunteer={
    id:'1000',
    name: 'Juanito',
    
}

const url = process.env.REACT_APP_API
const urlTablaExtensa=`${url}extended_form/`;


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
    root: {
        width: '100%',
        '& > * + *': {
          marginTop: theme.spacing(2),
        },
      }
  }));
  
  
    

const Profile = (onClick) => {

    const [userExist,setUserExsit]=useState({
        userEx:false,
    });
    const [datos, setDatos]=useState({
        id:'1000',
        username:'juanito',
        
    })
    const [datosExtend,serDatosExtend]=useState({
        birth_date:'',
        degree:'',
        carrer:'',
        general_interest:[],
        city:'',
        country:'',
        description:''
    })

    const handleInputChange =(event)=>{
        console.log(event.target.value)
        setDatos({
            ...datos,[event.target.name]:event.target.value
        })
        serDatosExtend({
            ...datosExtend,[event.target.name]:event.target.value
        })
    }
    var peticionPost=async()=>{
        serDatosExtend({ birth_date: reformatDateString(datosExtend.birth_date)})
        
       await axios.post(urlTablaExtensa,datosExtend).then(response=>{
            alert('actualizado correctamente');
        }).catch(error=>{
          console.log(error.message);
        })
      }
    var peticionPut = ()=>{
        
        axios.put(urlTablaExtensa+datosExtend.volunteer_id, datosExtend).then(response=>{
            alert('actualizado correctamente');
        })
    }

    function sendForm(){
        if(userExist.userEx){
            peticionPut();
            
            handleClose()
        }else{
            console.log("enviando datos nuevos")
            peticionPost()
            handleClose()
        }
    }
    function reformatDateString(s) {
        var b = s.split(/\D/);
        return b.reverse().join('-');
      }

    
    useEffect(()=>{
        // eslint-disable-next-line react-hooks/exhaustive-deps
        axios.get(urlTablaExtensa+datos.id).then(response=>{
    
        console.log(response.data.data)
        if(response.data.data){
            console.log("hay datos ")
            setUserExsit({userEx: true })
            serDatosExtend({ volunteer_id:response.data.data.volunteer_id,
                            birth_date:response.data.data.birth_date,
                            carrer:response.data.data.career,
                            degree:response.data.data.degree,
                            general_interest:response.data.data.general_interest,
                            city:response.data.data.city,
                            description:response.data.data.description})
            
        }else{
            console.log("no existe data")
            setUserExsit({ userEx: false})
        }
        })
    },[datos.id]
    
    )
    



    const location = useLocation();
    const classNamees = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false); 
   
    
      

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        axios.get(urlTablaExtensa+datos.id).then(response=>{
    
            console.log(response.data.data)
            if(response.data.data){
                console.log("hay datos ")
                setUserExsit({userEx: true })
                serDatosExtend({ volunteer_id:response.data.data.volunteer_id,
                                birth_date:response.data.data.birth_date,
                                carrer:response.data.data.career,
                                degree:response.data.data.degree,
                                general_interest:response.data.data.general_interest,
                                city:response.data.data.city,
                                description:response.data.data.description})
                
            }else{
                serDatosExtend({ volunteer_id:'',
                    birth_date:'',
                    carrer:'',
                    degree:'',
                    general_interest:[],
                    city:'',
                    description:''})
                console.log("no existe data")
                setUserExsit({ userEx: false})
            }
            })
        setOpen(false);
    };
    
    const body = (
        <div style={modalStyle} className={classNamees.paper}>
          <h2 id="simple-modal-title">Editar Usuario</h2>
            {/* <FormEditUser volunteerst={volunteer} userExtend={userExtend} userEx={userExist.userEx} /> */}
            <div>
            <form>
                <label htmlFor="username">Nombre</label>
                <input
                    value={datos.username}
                    onChange={handleInputChange}
                    name="username" id='username' type='text'
                />
                <br></br>
                
                <label htmlFor="degree">Grado de Estudios:</label>
                <input
                    value={datosExtend.degree}
                    onChange={handleInputChange}
                    name="degree" id='degree' type='text'
                />
                <br></br>

                <label htmlFor="carrer">Profesion u oficio:</label>
                <input
                    value={datosExtend.carrer}
                    onChange={handleInputChange}
                    name="carrer" id='carrer' type='text'
                />
                <br></br>

                <label htmlFor="city">Ciudad:</label>
                <input
                    value={datosExtend.city}
                    onChange={handleInputChange}
                    name="city" id='city' type='text'
                />
                <br></br>

                <label htmlFor="country">Pais:</label>
                <input
                    value={datosExtend.country}
                    onChange={handleInputChange}
                    name="country" id='country' type='text'
                />
                <br></br>

                <label htmlFor="descroption">Descripcion:</label>
                <input
                    value={datosExtend.Descripcion}
                    onChange={handleInputChange}
                    name="Descripcion" id='Descripcion' type='text'
                />
                <br></br>

                <label htmlFor="birth_date">Fecha de nacimiento:</label>
                <input
                    value={datosExtend.birth_date}
                    onChange={handleInputChange}
                    name="birth_date" id='birth_date' type='text'
                    
                />
                <br></br>
                <Button onClick={sendForm} color="primary" variant="contained" borderradius="20%">Guardar Cambios</Button>
                
            </form>
        </div>
            <Button type="button" onClick={handleClose} variant="contained" color="secondary" >Cancelar</Button>
          
        </div>
      );
   
    return (
        <div>            
            {location.pathname === '/' && (
                <Link to='/profile'>Perfil</Link>
            )}
            <div>
                {location.pathname !== '/' && (
                    <div>

                        <div className="picture">


                        </div>
                        <div className="name">
                            <h2>{volunteer.name}</h2>
                            <p>Pequeña descripción de la persona</p>
                            {
                                userExist.userEx?
                                <Button type="button" onClick={handleOpen} variant="contained" color="primary" >Editar Perfil</Button>:
                                <Button type="button" onClick={handleOpen} variant="contained" color="primary" >Completar Perfil</Button>
                            }
                            
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="simple-modal-title"
                                aria-describedby="simple-modal-description"
                            >
                                {body}
                                
                            </Modal>
                            
                        </div>
                        <Button onClick={showData} color="primary" borderradius="20%">Datos personales</Button>
                        <Button onClick={showEvents} color="primary" borderradius="20%">Eventos asistidos</Button>
                        <div className="container">
                            <div className="btn-container" id="data">

                            
                            </div>
                            <div className="gen-info-container">
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
import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Button,Modal } from '@material-ui/core';
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css"  
import { makeStyles ,withStyles} from '@material-ui/core/styles';
import './Profile.css';
import Grid from '@material-ui/core/Grid';

const volunteer={
    id:'1',
    name: 'Juanito',
    
}

//const url = process.env.REACT_APP_API
//const urlTablaExtensa=`${url}extended_form/`;
const urlTablaExtensa ="http://localhost:5000/extended_form/";

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
        '@media (maxWidth: 375px)': {

                top: 0,
            left: 0,
            
          },
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  const CancelButton = withStyles((theme) => ({
    root: {
      color: 'white',
      backgroundColor: '#a8a8a8',
      '&:hover': {
        backgroundColor: '#818181',
      },
    },
  }))(Button);
  const useStyles = makeStyles((theme) => ({
    containerbuttons:{
        display:'flex',
        justifyContent:'center',
    },
    buttons:{
        width: '36%',
        height: '30px',   
        margin:'7px'
    },
    intputextaera:{
        width: '76%',
        height: '100px',
        background: '#FFFFFF',
        border: '1px solid #C4C4C4',
        boxSizing: 'border-box',
        borderRadius: '6px',
        padding: '3px 5px',
        margin:'7px 0px 7px 0px',
        position:'relative',
        left:'12%',
        resize: 'none'
        
    }, 
    intputs:{
        width: '76%',
        height: '38px',
        background: '#FFFFFF',
        border: '1px solid #C4C4C4',
        boxSizing: 'border-box',
        borderRadius: '6px',
        padding: '3px 5px',
        margin:'7px 0px 7px 0px',
        position:'relative',
        left:'12%',     
    },
    checkintereses:{
        width: '76%',
        padding: '3px 5px',
        margin:'7px 0px 7px 0px',
        position:'relative',
        left:'12%',
    },
    titulos:{
        width: '76%',
        position:'relative',
        
        left:'12%',
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
    
    
    const [datos,setDatos]=useState({    
        id_usuario:'', 
        nombre:'',
        apellido:'',
        fecha_de_nacimiento:'',
        pais_de_recidencia:'',
        ciudad_de_recidencia:'',
        carrera:'',
        nivel_de_estudios:'',
        descripcion_personal:'',
        telefono:'',
        genero:'',
        estado_de_cuenta:'',
        rol:'',
        intereses:[],
        id_autenticacion:'',
    })
    const [datosEdit,setDatosEdit]=useState({        
        id_usuario:'', 
        nombre:'',
        apellido:'',
        fecha_de_nacimiento:'',
        pais_de_recidencia:'',
        ciudad_de_recidencia:'',
        carrera:'',
        nivel_de_estudios:'',
        descripcion_personal:'',
        telefono:'',
        genero:'',
        estado_de_cuenta:'',
        rol:'',
        intereses:[],
        id_autenticacion:'',
    })
    const handleChange = (event) => {

        var nuevosInt=''
        const tikeado=!event.target.checked
        
        if(typeof(datosEdit.intereses)===typeof("string")){
            
            if(tikeado){
                nuevosInt=datosEdit.intereses.split(/[,"}{]/).filter(Boolean).filter(i=>i!==event.target.value)
                
            }else{
                nuevosInt=datosEdit.intereses.split(/[,"}{]/).filter(Boolean).concat(event.target.value)
            }
            
        }else{
            
            if(tikeado){
                
                nuevosInt=datosEdit.intereses.filter(i=>i!==event.target.value)
            }
            else{
                const aux=datosEdit.intereses
                aux.push(event.target.value)
                nuevosInt=aux
            }
        }
        
        nuevosInt=nuevosInt.toString()
        
        setDatosEdit({...datosEdit,[event.target.name]:nuevosInt})

        
      };





    
    const handleInputChange =(event)=>{        
        setDatosEdit({
            ...datosEdit,[event.target.name]:event.target.value
        })
    }
    var peticionPost=async(asignaciones)=>{
       
        
       await axios.post(urlTablaExtensa,asignaciones).then(response=>{
            alert('actualizado correctamente');
        }).catch(error=>{
          console.log(error.message);
        })
      }
    var peticionPut = (asignaciones)=>{
        
        axios.put(urlTablaExtensa+datos.id_usuario, asignaciones).then(response=>{
            alert("Actualizado")
        })
        
        
    }

    function sendForm(){
        setDatos(datosEdit)
        //putTablaAutenticacion

        const asignaciones= {
            nombre:datosEdit.nombre,
            apellido:datosEdit.apellido,
            fecha_de_nacimiento:datosEdit.fecha_de_nacimiento,
            pais_de_recidencia:datosEdit.pais_de_recidencia,
            ciudad_de_recidencia:datosEdit.ciudad_de_recidencia,
            carrera:datosEdit.carrera,
            nivel_de_estudios:datosEdit.nivel_de_estudios,
            descripcion_personal:datosEdit.descripcion_personal,
            telefono:datosEdit.telefono,
            genero:datosEdit.genero,
            estado_de_cuenta: datosEdit.estado_de_cuenta,
            rol:datosEdit.rol,
            intereses:datosEdit.intereses,
            id_autenticacion:datosEdit.id_autenticacion

           }

        if(userExist.userEx){
            peticionPut(asignaciones);            
            setOpen(false);          
        }else{
            peticionPost(asignaciones)
            setOpen(false);
        }
        
    }
   
     
    
    useEffect(()=>{
        // eslint-disable-next-line react-hooks/exhaustive-deps

        const responseAutenticacion={
            id_autenticacion:'1',
            correo_electronico:"aaaaaaa@gmail.com",
            telefono:'74701750'}

        
        
        axios.get(urlTablaExtensa+responseAutenticacion.id_autenticacion).then(response=>{
    
        
        if(response.data.data){
            
            
            setUserExsit({userEx: true })
            
            //setDatos({...response.data.data,...responseAutenticacion})
            //setDatosEdit({...response.data.data,...responseAutenticacion})
            
            setDatos({...response.data.data})
            setDatosEdit({...response.data.data})
                            
            
        }else{
            
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
        setDatosEdit(datos)
        setOpen(false);
    };
    
    const body = (
        <div style={modalStyle} /*className={classNamees.paper}*/  className="paperr">
          
            
            <div>
            <form className="fomrExt">
                <label className={classNamees.titulos} htmlFor="nombre">Nombre:</label>
                <input
                    className={classNamees.intputs}
                    value={datosEdit.nombre}
                    onChange={handleInputChange}
                    placeholder='Nombre'
                    name="nombre" id='nombre' type='text'
                /><br></br>
                
                <label className={classNamees.titulos} htmlFor="fecha_de_nacimiento">Fecha de nacimiento:</label>
                <input 
                    
                    className={classNamees.intputs} 
                    type="date" 
                    name="fecha_de_nacimiento" 
                    value={datosEdit.fecha_de_nacimiento.split('T')[0]}
                    onChange={handleInputChange}/>
                    
                
                <label className={classNamees.titulos} htmlFor="nivel_de_estudios">Grado de Estudios:</label>
                <select name="nivel_de_estudios" value={datosEdit.nivel_de_estudios} onChange={handleInputChange} className={classNamees.intputs}>
                    <option value="Primaria">Primaria</option>
                    <option value="Secundaria">Secundaria</option>
                    <option value="Bachiller">Bachiller</option>
                    <option value="Licenciatura">Licenciatura</option>
                    <option value="PostGrado">Post-Grado</option>
                </select>

                <label className={classNamees.titulos} htmlFor="carrera">Profesion u oficio:</label>
                <input
                    className={classNamees.intputs}
                    value={datosEdit.carrera}
                    onChange={handleInputChange}
                    placeholder='Profecion u Oficio'
                    name="carrera" id='carrera' type='text'
                />
                <br></br>
                <label  className={classNamees.titulos}>Mis intereses:</label><br></br>
                <div className={classNamees.checkintereses}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                    <input
                        checked={datosEdit.intereses.includes("Asilos")}
                        onChange={handleChange}
                        value="Asilos"
                        name="intereses" id='AsilosCheck' type='checkbox'
                    /><label htmlFor="AsilosCheck">Asilos</label>
                    </Grid>
                    <Grid item xs={6}>
                    <input
                        checked={datosEdit.intereses.includes("Niños y niñas")}
                        onChange={handleChange}
                        value="Niños y niñas"
                        name="intereses" id='NiñosCheck' type='checkbox'
                    /><label htmlFor="NiñosCheck">Niños</label>
                    </Grid>
                    <Grid item xs={6}>
                    <input
                        checked={datosEdit.intereses.includes("Refugios")}
                        onChange={handleChange}
                        value="Refugios"
                        name="intereses" id='RefugiosCheck' type='checkbox'
                    /><label htmlFor="RefugiosCheck">Refugios</label>
                    </Grid>
                    <Grid item xs={6}>
                    <input
                        checked={datosEdit.intereses.includes("Educacion")}
                        onChange={handleChange}
                        value="Educacion"
                        name="intereses" id='EducacionCheck' type='checkbox'
                    /><label htmlFor="EducacionCheck">Educacion</label>
                    </Grid>
                    
                </Grid>          

                </div>
                
                <label className={classNamees.titulos} htmlFor="pais_de_recidencia">Pais de recidencia:</label>
                <input
                    className={classNamees.intputs}
                    value={datosEdit.pais_de_recidencia}
                    onChange={handleInputChange}
                    placeholder='Pais de recidencia'
                    name="pais_de_recidencia" id='pais_de_recidencia' type='text'
                />
                <br></br>

                <label className={classNamees.titulos} htmlFor="ciudad_de_recidencia">Ciudad de recidencia:</label>
                <input
                    className={classNamees.intputs}
                    value={datosEdit.ciudad_de_recidencia}
                    onChange={handleInputChange}
                    placeholder='Ciudad de recidencia'
                    name="ciudad_de_recidencia" id='ciudad_de_recidencia' type='text'
                />
                <br></br>
                <label className={classNamees.titulos} htmlFor="telefono">Telefono:</label>
                <input
                    className={classNamees.intputs}
                    value={datosEdit.telefono}
                    onChange={handleInputChange}
                    placeholder='Telefono
                    '
                    name="telefono" id='telefono' type='text'
                />
                <br></br>

                <label className={classNamees.titulos} htmlFor="genero">Genero:</label>
                <select name="genero" value={datosEdit.genero} onChange={handleInputChange}  className={classNamees.intputs}>
                    <option value="">Genero</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Otro">Otro</option>
                    <option value="Prefiero no decirlo">Prefiero no decirlo</option>
                    
                </select>
                     

                

                <label className={classNamees.titulos} htmlFor="descripcion_personal">Mi pequeña descripcion:</label>
                <textarea
                    className={classNamees.intputextaera}  
                    value={datosEdit.descripcion_personal}
                    onChange={handleInputChange}
                    
                    name="descripcion_personal" id='descripcion_personal'
                    
                ></textarea>
                <br></br>
                
                        

                
                
                
                
            </form>
        </div>
        <div className={classNamees.containerbuttons}>
            <Button onClick={sendForm} color="primary"  className={classNamees.buttons} variant="contained" borderradius="20%">Guardar</Button>
            <CancelButton variant="contained" onClick={handleClose} className={classNamees.buttons} color="primary" >Cancelar </CancelButton>
            {/*<Button type="button" onClick={handleClose} variant="contained" color="secondary" >Cancelar</Button>*/}
          
        </div>
        
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
                            <h2>{datosEdit.nombre}</h2>
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
                                aria-describedby="simple-modal-descripcion_personal"
                            >
                                {body}
                                
                            </Modal>
                            
                            
                            
                        </div>
                        <Button onClick={showData} color="primary" borderradius="20%">Datos personales</Button>
                        <Button onClick={showEvents} color="primary" borderradius="20%">Eventos asistidos</Button>
                        

                    </div>


                )}
            </div>
        </div>

    )
}

export default Profile
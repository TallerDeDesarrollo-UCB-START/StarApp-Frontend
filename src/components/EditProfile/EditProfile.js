import React, {Fragment,useState} from 'react';
import { FormControl, Input, InputLabel, FormHelperText } from '@material-ui/core';

const FormEditPerfil = ({volunteerts}) => {
    
    //const customData = require('./customData.json');
    /*var volunteer={
        nombre: 'pepe',
        email: 'pepe@gmail.com',
        fecNac: '12/12/12',
        edad: '12',
        
    }*/
    const {nombre ,email, fecNac, edad }=volunteerts;

    const [datos, setDatos] = useState({
        usernombre: nombre,
        useremail: email,
        userfecNac: fecNac,
        useredad: edad
    })

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.usernombre + ' ' + datos.useremail + ' ' + datos.userfecNac + ' ' + datos.useredad)
    }

    return (
        <Fragment>
            <FormControl>
                <div>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                </div>
                
            </FormControl>
            <h1>Editar Perfil</h1>
            <form onSubmit={enviarDatos}>
                <div >
                    <input value={datos.usernombre}></input>
                    <input  type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nombre"></input>
                </div>
                <div value={datos.useremail}>
                    <input  type="text" placeholder="Email" className="form-control" onChange={handleInputChange} name="email"></input>
                </div>
                <div value={datos.userfecNac}>
                    <input type="text" placeholder="Fecha de Nacimiento" className="form-control" onChange={handleInputChange} name="fecNac"></input>
                </div>
                <div value={datos.useredad}>
                    <input  type="text" placeholder="Edad" className="form-control" onChange={handleInputChange} name="edad"></input>
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
                <button type="submit" className="btn btn-primary">Cancelar</button>
            </form>
            
            <ul>
                <li>{datos.usernombre}</li>
                <li>{datos.useremail}</li>
                <li>{datos.userfecNac}</li>
                <li>{datos.useredad}</li>
            </ul>
        </Fragment>
    );
}
 
export default FormEditPerfil
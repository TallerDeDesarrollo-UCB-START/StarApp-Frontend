import React, {Fragment,useState} from 'react';

const FormEditPerfil=()=>{
    const[datos,setDatos]=useState({
        nombre: '', 
        correo: ''
    })
    const handleInputChange = (event) => {
        //console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        console.log(datos.nombre + ' ' + datos.correo)
    }
    return (
        <Fragment>
            <div>
                <form>
                    <label htmlFor="nombre">nombre</label>
                    <input value={datos.nombre}
                    onChange={handleInputChange}
                    name="nombre" type="text"
                    ></input>

                <label htmlFor="correo">correo</label>
                    <input value={datos.correo}
                    onChange={handleInputChange}
                    name="correo" type="text"
                    ></input>
                </form>

            </div>
        </Fragment>
    )

}
export default FormEditPerfil
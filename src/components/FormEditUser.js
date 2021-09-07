
import React, {Fragment,useState}  from 'react'

const FormEditUser=( { volunteerst } ) =>{

    const {name, age, }=volunteerst;

    const [datos,setDatos]=useState({
        username:name,
        userage:age,
        userSize:''
    });
    
    const handleInputChange =(event)=>{
        console.log(event.target.value)
        setDatos({
            ...datos,[event.target.name]:event.target.value
        })
    }

    return (
        <Fragment>
        <div>
            <form>
                <label htmlFor="username">Nombre</label>
                <input
                    value={datos.username}
                    onChange={handleInputChange}
                    name="username" id='username' type='text'
                />
                <br></br>
                <label htmlFor="userage">Edad:</label>
                
                <input
                    value={datos.userage}
                    onChange={handleInputChange}
                    name="userage" id='userage' type='text'
                />
                <br></br>
                <label htmlFor="usertalla">Talla:</label>
                
                <input
                    value={datos.userSize}
                    onChange={handleInputChange}
                    name="userSize" id='userSize' type='text'
                    placeholder='ingrese su talla'
                />
                {/* <span>{JSON.stringify(this.setState)}</span> */}
            </form>
        </div>
        </Fragment>
    )
   
}
export default FormEditUser

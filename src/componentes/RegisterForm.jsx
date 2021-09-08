import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import LogoStart from '../images/logoStart.png'
import InputTextbox from './InputTextbox'
import { Form } from "react-final-form"
import {useMediaQuery, Button} from '@material-ui/core'
import { validEmail, validPassword} from './RegEx'
//import { Redirect } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    registerContainer : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '5%',
    },
    logoContainer : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo : {
        width: '35%',
        marginTop: '30px',
    },
    registerCard : {
        width: '550px',
        height: '700px',
        background: '#FFFFFF',
        boxShadow: '0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.14), 0px 8px 10px -5px rgba(0, 0, 0, 0.2)',
        borderRadius: '6px 6px 0px 0px',
    },
    respregisterCard : {
        width: '100%',
        height: '484px',
    },
    buttonContainer :{
        width: '100%',
        marginTop:'42px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    registerButton : {
        color: 'white',
        fontWeight: 'bold',
    },
})
)

const RegisterForm = () => {
    const classes = useStyles()
    const smallScreen = useMediaQuery('(min-width:420px)')
    const validate = values => {
        const errors = {}
        if(!validEmail.test(values.email)){
            errors.email = "No valido"
        }
        if(!values.username){
            errors.username = "Campo requerido"
        }
        if(!values.lastname){
            errors.lastname = "Campo requerido"
        }
        if(!validPassword.test(values.password)){
            errors.password = "Debe contener 6 caracteres y un número"
        }
        return errors
    }

    const onSubmit = async values => {
        values.username = `${values.username} ${values.lastname}`
        // return AxiosClient.post(`${URL}products/`, values)
        //     .then(response => {
        //         if ((response.status = 201)) {
        //             return <Redirect to="/login" />
        //         }else{
        //             alert('Registro fallido')
        //             return <Redirect to="/register" />
        //         }
        //     })
        //     .catch(() => {
        //         console.log(response.status)
        //     })
        console.log(values)
    }

    return (
        <div className = {classes.registerContainer}>
            <Card className = {(smallScreen)?classes.registerCard:classes.respregisterCard}>
                <div className = {classes.logoContainer}>
                    <img src={LogoStart} alt="logo Start" className = {classes.logo}/>
                </div>
                <Form onSubmit={onSubmit} validate={validate} >
                    {({ handleSubmit }) => (
                        <form onSubmit={handleSubmit} noValidate>
                            <InputTextbox title = "Ingresa tu Correo Electrónico:" name="email" type="text" placeholder = "ejemplo@gmail.com"/>
                            <InputTextbox title = "Ingresa tu Nombre:" name="username" type="text" placeholder = "Juan"/>
                            <InputTextbox title = "Ingresa tu Apellido:" name="lastname" type="text" placeholder = "Casas"/>
                            <InputTextbox title = "Crea tu Contraseña:" name="password" type = "password"/>

                            <div className = {classes.buttonContainer}>
                                <Button variant="contained" color="secondary" className = {classes.registerButton} type = "submit">
                                    Crear tu cuenta START
                                </Button>
                               
                            </div>
                        </form>
                    )}
                </Form>
            </Card>
        </div>
    )
}

export default RegisterForm

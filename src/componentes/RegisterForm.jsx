import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import LogoStart from '../images/logoStart.png'
import InputTextbox from './InputTextbox'
import { Form } from "react-final-form"
import {useMediaQuery, Button, Link} from '@material-ui/core'
import { validEmail} from './RegEx'

const useStyles = makeStyles(theme => ({
    loginContainer : {
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
    loginCard : {
        width: '550px',
        height: '700px',
        background: '#FFFFFF',
        boxShadow: '0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.14), 0px 8px 10px -5px rgba(0, 0, 0, 0.2)',
        borderRadius: '6px 6px 0px 0px',
    },
    respLoginCard : {
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
    loginButton : {
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
        return errors
    }

    const onSubmit = async values => {
        // return AxiosClient.post(`${URL}products/`, values)
        //     .then(response => {
        //         if ((response.status = 201)) {
        //             console.log(response.data.data)
        //         }
        //     })
        //     .catch(() => {
        //         console.log(response.status)
        //     })
        alert('*usuario registrado*')
    }

    return (
        <div className = {classes.loginContainer}>
            <Card className = {(smallScreen)?classes.loginCard:classes.respLoginCard}>
                <div className = {classes.logoContainer}>
                    <img src={LogoStart} alt="logo Start" className = {classes.logo}/>
                </div>
                <Form onSubmit={onSubmit} validate={validate} >
                    {({ handleSubmit }) => (
                        <form onSubmit={handleSubmit} noValidate>
                            <InputTextbox title = "Ingresa tu Correo Electrónico:" name="email" type="text" placeholder = "ejemplo@gmail.com"/>
                            <InputTextbox title = "Ingresa tu Nombre:" name="email" type="text" placeholder = "Andrew Juanito"/>
                            <InputTextbox title = "Ingresa tu Apellido:" name="email" type="text" placeholder = "Apellido"/>
                            <InputTextbox title = "Crea tu Contraseña:" name="passwd" type = "password"/>

                            <div className = {classes.buttonContainer}>
                                <Button variant="contained" color="secondary" className = {classes.loginButton} type = "submit">
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

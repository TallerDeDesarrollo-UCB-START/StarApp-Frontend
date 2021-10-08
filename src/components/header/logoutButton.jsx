import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router'

const useStyles = makeStyles((theme)=> ({
    loginButton: {
        width:"10%", 
        marginRight:"30px",
    },
}))

const LogoutButton = ({logged}) => {
    const classes = useStyles()
    const history = useHistory()
    return (
        <Button 
            className={classes.loginButton} 
            variant={(logged)?"contained": "outlined"}
            onClick={(logged)?
                ()=>{
                    sessionStorage.removeItem("jwt")
                    window.location.reload()
                }:()=>history.push("/login")}>
                {(logged)?"Log out": "Login"}
        </Button>
    )
}

export default LogoutButton

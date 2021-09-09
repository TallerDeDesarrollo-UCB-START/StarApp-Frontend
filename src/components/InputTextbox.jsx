import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography} from '@material-ui/core';
import { Field} from "react-final-form";
import { TextField } from "final-form-material-ui";

const useStyles = makeStyles(theme => ({
    textboxContainer : {
        marginTop:'32px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    textboxLabel: {
        width: '76%',
        height: '42px',
    },
    textbox : {
        width: '76%',
        height: '42px',
        background: '#FFFFF',
        border: '1px solid #C4C4C4',
        boxSizing: 'border-box',
        borderRadius: '6px',
        padding: '3px 5px',
    },
    passwd : {
        WebkitTextSecurity: 'disc',
        textSecurity: 'disc',
    },
}))

const InputTextbox = ({title, placeholder, type, name}) => {
    const classes = useStyles()
    return (
        <div className = {classes.textboxContainer}>
            <label htmlFor={name} className = {classes.textboxLabel}>
                <Typography> {title} </Typography> 
            </label>
            <Field
            id = {name}
            name={name}
            type={type}
            placeholder={(placeholder)? placeholder: ""}
            component={TextField}
            className = {classes.textbox}
            />
        </div>
    )
}

export default InputTextbox

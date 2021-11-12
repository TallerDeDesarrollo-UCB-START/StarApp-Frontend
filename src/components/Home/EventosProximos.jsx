import React, {useState, useEffect} from 'react'
import {Typography, useMediaQuery, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CardEvento from './CardEvento'
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    root_container:{
        margin:'40px 15%',
    },
    resp_root_container:{
        margin:'40px 15px',
    },
    containerEvents:{
        margin: '20px 0',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
    },
    noEvents:{
        margin: '200px 0',
        display: "flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent: "center",
    },
    resp_noevents_message:{
        fontSize:"16px",
    },

}))

const EventosProximos = ({id}) => {
    const smallScreen = !useMediaQuery("(min-width:500px)")
    const [events, setEvents] = useState([])
    const classes = useStyles()
    const baseURL = `${process.env.REACT_APP_API}sesion/${id}/get_my_eventos`
    useEffect(()=>(
        axios.get(baseURL)
        .then( response => {
            var resp = response.data
            setEvents(resp)
        }).catch( error => {
            console.log(error)
        })
    ),[baseURL])
    return (
        <div className={(smallScreen)?classes.resp_root_container:classes.root_container}>
            <Typography variant="h2" component="h2" gutterBottom>
                Tus Próximos Eventos
            </Typography>
            {(events.length)?(
                <div className = {classes.containerEvents}>
                    {events.map((event)=>(
                        <CardEvento event={event} enlisted={true} key={event.id}/>
                    ))}
                </div>
            ):(
                <div className = {classes.noEvents}>
                    <Typography color="textSecondary" className={(smallScreen)?classes.resp_noevents_message:classes.noevents_message}>
                        Aún no te has registrado a ningún evento. Una vez te hayas registrado a alguno de nuestros eventos, aparecerán en tu página de inicio.
                    </Typography>
                    <Button onClick={()=>window.location.href="/eventos"} variant="contained" color="primary" style={{margin:"20px 0"}}>
                        Explorar eventos
                    </Button>
                </div>
            )}
        </div>
    )
}

export default EventosProximos

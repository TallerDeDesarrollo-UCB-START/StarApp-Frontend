// Componentes:
// Librerias-Paquetes:
import { Box ,Typography,List, ListItem,ListItemIcon,ListItemText} from '@material-ui/core';
/*import { useState,useEffect } from 'react';

function ListaParticipantesProyecto({proyectoId}){

    const[participantes, setParticipantes]=useState([])

    useEffect(() => {
        const getParticipantes = async () => {
        const participantesProyecto =  await fetchParticipantes()
        setParticipantes(participantesProyecto)
        }
        getParticipantes()
    })

    // HTTP requests & functions
    async function fetchParticipantes() {
        const response = await fetch(`${process.env.REACT_APP_API}get_participantes_proyecto_simple/${proyectoId}`)
        const data = await response.json()
        return data;
    }
    return (
        <Box>
            <p>Participantes:</p>
            <List>
            {
                participantes.map(participante=>(
                    <ListItem>
                        <ListItemIcon>

                        </ListItemIcon>
                        <ListItemText primary={participante.nombre} />
                    </ListItem>

                ))
            }

            </List>


        </Box>

    );
}
export default ListaParticipantesProyecto */
import axios from 'axios'
import React,{Component} from 'react'

export class ListaParticipantesProyecto extends Component{
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }
    
    componentDidMount(){
        let thisUrl = window.location.href;
        let id = this.getId(thisUrl);
        axios.get(`${process.env.REACT_APP_API}get_participantes_proyecto_simple/${id}`)
        .then(response => {
            console.log(response)
            this.setState({posts:response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }
    getId(thisUrl) {
        var id = thisUrl.substring(thisUrl.indexOf("/") + 1);
        id = thisUrl.split("/").pop();
        return id;
      }

    render(){
        const {posts} = this.state
        return(
            <Box>
                <p>Lista de Participantes:</p>
                <List>
                {
                    posts.map(post=>(
                        <ListItem>
                            <ListItemIcon>

                            </ListItemIcon>
                            <ListItemText primary={post.nombre} />
                        </ListItem>

                    ))
                }
                </List>
            </Box>

        )
    }
}
export default ListaParticipantesProyecto
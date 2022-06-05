import { Box ,List, ListItem,ListItemIcon,ListItemText,Button} from '@material-ui/core';
import axios from 'axios';
import React,{Component} from 'react';
import ExportExcel from 'react-export-excel';
import PuertaPermisos from '../organismos/PuertaPermisos';
import {SCOPES} from '../organismos/map-permisos';
import MyButton from '../../../shared/components/Button';

const ExcelFile = ExportExcel.ExcelFile;
const ExcelSheet = ExportExcel.ExcelSheet;
const ExcelColumn = ExportExcel.ExcelColumn;

class ListaParticipantesProyecto extends Component{
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            inicio:'',
            fin: ''

        }
    }
    
    componentDidMount(){
        let thisUrl = window.location.href;
        let id = this.getId(thisUrl);
        axios.get(`${process.env.REACT_APP_API}get_participantes_proyecto_simple/${id}`)
        .then(response => {
            this.setState({posts:response.data});
            this.setState({inicio:"inicio: " + response.data[0].fecha_inicio.substring(0,10)});
            let fin = response.data[0].fecha_fin;
            if (fin==null) {

                this.setState({fin:"fin: en progreso "})
            }
            else{
                this.setState({fin:"fin: " + fin})
            }
            
        })
        .catch(error => {
            console.log(error);
        })

    }
    getId(thisUrl) {
        var id = thisUrl.substring(thisUrl.indexOf("/") + 1);
        id = thisUrl.split("/").pop();
        return id;
      }

    render(){
        const {posts} = this.state
        const {inicio} = this.state
        const {fin} = this.state
        return(
            <Box>
                <p style={{color: '#424da6',textDecoration:'underline', fontWeight: 'bold'}}>Lista de Participantes:</p>
                <List>
                {
                    posts.map(post=>(
                        <ListItem key={post.id}>
                            <ListItemIcon>

                            </ListItemIcon>
                            <ListItemText  primary={post.nombre} />
                        </ListItem>

                    ))
                }
                </List>
                <PuertaPermisos scopes={[SCOPES.canCrudProyectos]}>
                    <ExcelFile element={<MyButton className="excel">Exportar Participantes</MyButton>} filename="ListaParticipantes">
                        <ExcelSheet data={posts} name="Participantes">
                            <ExcelColumn name="inicio" label={inicio}/>
                            <ExcelColumn label={fin}/>
                            <ExcelColumn label="Nombre" value="nombre" />
                            <ExcelColumn label="Apellido" value="apellido"/>
                            <ExcelColumn label="Rol" value="rol"/>
                            <ExcelColumn label="Teléfono" value="telefono"/>
                        </ExcelSheet>
                    </ExcelFile>
                </PuertaPermisos>
                
            </Box>

        )
    }
}

export default ListaParticipantesProyecto
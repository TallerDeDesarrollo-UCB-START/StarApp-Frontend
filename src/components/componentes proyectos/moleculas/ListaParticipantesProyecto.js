import { Box ,List, ListItem,ListItemIcon,ListItemText,Button} from '@material-ui/core';
import axios from 'axios'
import React,{Component} from 'react'
import ExportExcel from 'react-export-excel'

const ExcelFile = ExportExcel.ExcelFile;
const ExcelSheet = ExportExcel.ExcelSheet;
const ExcelColumn = ExportExcel.ExcelColumn;
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
                <div>
                    <p>Lista de Participantes:</p>
                    <ExcelFile element={<Button>Exportar Excel</Button>} filename="ListaParticipantes">
                        <ExcelSheet data={posts} name="Participantes">
                            <ExcelColumn label="Lista Participantes" value="nombre"/>
                        </ExcelSheet>
                    </ExcelFile>
                </div>
                
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
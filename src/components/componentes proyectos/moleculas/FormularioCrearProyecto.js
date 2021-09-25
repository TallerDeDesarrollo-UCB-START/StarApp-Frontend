// Componentes:
import InputCrearProyecto from '../atomos/InputCrearProyecto'
import ParticiparEnProyectoBtn from '../atomos/ParticiparEnProyectoBtn'
import CrearProyectoBtn from '../atomos/CrearProyectoBtn'
// Librerias-Paquetes:
import '../moleculas/FormularioCrearProyecto.css'
import { useState } from "react"
import { Container, FormControl, InputLabel, Input, FormHelperText, Grid, Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

// Kevin y Pame
function FormularioCrearProyecto({ onCrearProy }) {
    // States
    const [titulo, setTitulo] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [objetivo, setObjetivo] = useState('')
    const [lider, setLider] = useState('')

    function resetStates() {
        setTitulo('')
        setDescripcion('')
        setObjetivo('')
        setLider('')
    }

    const onSubmit = (event) => {
        event.preventDefault() // To avoid submitting to an actual page
        
        if (!titulo || !descripcion || !objetivo || !lider) {
            alert('Porfavor llene los campos')
            return
        }
        
        onCrearProy({ titulo, descripcion, objetivo, lider }) // callback invocation

        resetStates()
    }

    return (
        <form className="gen-form" onSubmit={onSubmit}>
            <h3 style={{margin: "auto", width: "50%"}}>CREAR PROYECTO</h3>
            <div style={{padding: "3%"}}>
                <div className='form-control'>
                    <label>Titulo</label>

                    <input type='text'
                        placeholder='Coloque el titulo'
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                </div>

                <div className='form-control'>
                    <label>Descripcion</label>
                    <input 
                        type='text' 
                        placeholder='Coloque la descripcion'
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                    />
                </div>
                
                <div className='form-control'>
                    <label>Objetivo</label>
                    <input 
                        type='text' 
                        placeholder='Coloque el objetivo'
                        value={objetivo}
                        onChange={(e) => setObjetivo(e.target.value)}
                    />
                </div>

                <div className='form-control'>
                    <label>Lider</label>
                    <input 
                        type='text' 
                        placeholder='Coloque el lider'
                        value={lider}
                        onChange={(e) => setLider(e.target.value)}
                    />
                </div>

                <input type='submit' value='Crear' className='btn btn-block'/>

                <button className='btn btn-block'> Cancelar </button>
            </div>
        </form>
    );
}

export default FormularioCrearProyecto


/*
const styles = {
    position: 'absolute',
    top: '50%',
    left: "35%",
    width: "437px",
    height: '397px',
    border: '1px solid grey'
}
*/

/*


            <Container style={styles}>
            <Grid container alignItems="center" direction="column">
                
                <Grid item md={12} >
                    <Box style={formstyles}>
                        <FormControl fullWidth={true}>
                            <InputLabel htmlFor="titulo">Titulo</InputLabel>
                            <Input id="titulo" aria-describedby="titulo-helper"></Input>
                            <FormHelperText id="titulo-helper">Titulo del proyecto</FormHelperText>
                        </FormControl>
                    </Box>
                    
                </Grid>
                
                
            </Grid>
        </Container>


*/

/*
<Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
            noValidate
            autoComplete="off"
            style={styles}>
            
            <div >
                <TextField id="outlined-basic" label="Titulo" variant="outlined" size="small"/>
            </div>
            
        </Box>
*/

/*
<Container sx={{ m: 5 }} style={styles}>
            <Typography color="primary" align="left" variant="h3" component="h2" gutterBottom >
                                Llenar formulario del Proyecto
            </Typography> 
            <InputCrearProyecto name="Nombre"/>
            <InputCrearProyecto name="Objetivo"/>
            <InputCrearProyecto name="Descripcion"/>
            <InputCrearProyecto name="Lider"/>
            
            <CrearProyectoBtn/>
            
            {<CrearProyectoBtn>}
            </Container>

*/
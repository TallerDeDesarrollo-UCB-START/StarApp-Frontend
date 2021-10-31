import { makeStyles } from '@material-ui/core/styles'
import { Typography} from '@material-ui/core';
import RecordatorioLlenarDatos from "./RecordatorioLlenarDatos"


const useStyles = makeStyles(theme => ({
    title: {
        marginTop: "160px",
        textAlign: "center",
    },
    subtitle: {
        textAlign: "center",
    },
}))

const Home = () =>{
    const classes = useStyles()
    
    return(
        <section>
            <Typography className = {classes.title} variant="h1">
                Bienvenido a Start Americas Together
            </Typography>
            <Typography className = {classes.subtitle} variant="h3">
                Aplicación interna para voluntarios
            </Typography>
            <RecordatorioLlenarDatos/>
        </section>
    )
}
export default Home;
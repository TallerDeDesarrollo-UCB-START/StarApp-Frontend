// Componentes:

// Librerias-Paquetes:
import Banner from '../../../assets/example.png';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import './BannerProyecto.css';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 131,
    },
});

function BannerProyecto({proyecto}) {

    const classes = useStyles();

    return (
        <CardMedia
          className={classes.media}
          image={proyecto.url_imagen}
          title={proyecto.title}
        />
    );
}

export default BannerProyecto
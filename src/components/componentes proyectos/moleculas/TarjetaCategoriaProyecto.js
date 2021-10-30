// Componentes:
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// Permisos/Roles:

// Librerias-Paquetes:

const useStyles = makeStyles(() => ({
    card: {
    
        borderRadius: '1rem',
        boxShadow: 'none',
        position: 'relative',
        minWidth: 200,
        minHeight: 360,
        width: '20%',
        heigth: '100%',
      /*'&:after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        width: '100%',
        height: '64%',
        bottom: 0,
        zIndex: 1,
        background: 'linear-gradient(to top, #000, rgba(0,0,0,0))',
      },*/
    },
    action: {
        width: '100%',
        heigth: '100%',
    },
    content: {
      width: '100%',
      color: 'white',
      fontSize: '2.2em'
    },
  }));

function TarjetaCategoriaProyecto({imagen, categoria}) {
    const classes = useStyles();
    const image = `url(${imagen})` 
    return (
        <Box>
            <Card className={classes.card}>
                <CardActionArea className={classes.action} style={{backgroundImage: image}}>
                    
                    <Box py={'40%'} px={'35%'} className={classes.content}>
                        xxxxfasfasfsa
                    </Box>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
                </CardActions>
                
            </Card>
        </Box>
    );
}
export default TarjetaCategoriaProyecto;

/* <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="100%"
                    image={imagen}
                    title={categoria}>
                        
                    </CardMedia>*/
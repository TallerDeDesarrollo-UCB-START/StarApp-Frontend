import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";


const useStyles = makeStyles(() => ({
    container: {
      width: '70%',//'90%',
      height: '110%',//'75%',
      margin: 'auto',
      borderRadius: '5px',
      '&:hover':{
        'box-shadow': '8px 8px 10px 0 rgba(0,0,0,0.5)',
        'transform': 'translateX(-6px)',
      }
    },
    card: {
        borderRadius: '5px',
        position: 'relative',
        width: '100%',
        height: '100%',

    },
    action: {
        width: '100%',
        height: '100%',
    },
    media: {
        opacity: '0.75'
    },
    content: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      textAlign: 'center',
      color: 'black',
      fontSize: '2em',
      position: 'absolute',
      top: '0%',
      right: '0%',
    },
    
  }));

function TarjetaCategoriaProyecto({imagen, categoria}) {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <Card className={classes.card}>
              
              <Link to={`../projects?categoria=${categoria}`}>
                <CardActionArea className={classes.action}>
                  <CardMedia
                    component="img"
                    alt={categoria}
                    height="200"
                    image={imagen}
                    title={categoria}
                    className={classes.media}
                  />
                </CardActionArea>
              </Link>
              
            </Card>
        </Box>
    );
}
export default TarjetaCategoriaProyecto;


/* style={{backgroundImage: image}}*/

/* CARD STYLES descartados:
//boxShadow: 'none',
        //minWidth: 200,
        //minHeight: 300,
      /*'&:after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        width: '100%',
        height: '64%',
        bottom: 0,
        zIndex: 1,
        background: 'linear-gradient(to top, #000, rgba(0,0,0,0))',
      },
*/
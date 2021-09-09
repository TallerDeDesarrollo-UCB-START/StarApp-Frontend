
import { useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';


import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from "@material-ui/styles";
import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

import './Home.css';

let theme = createTheme();
theme = responsiveFontSizes(theme);
const Home = () => {
    const location = useLocation()
    return (
        <div>         
                
            <Card color="primary" className="cardHome">  
                
                    
                    <CardContent>
                        <ThemeProvider theme={theme}>
                            <Typography color="primary" align="center" variant="h1" component="h2" gutterBottom >
                                HAZTE STARTER
                            </Typography>   
                        </ThemeProvider>                            
                        <Typography className="textHome" variant="subtitle1" color="textPrimary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarcticallllllllllllllllllllllllllllllllllllllllllllllllllllllllll
                            llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
                            llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll'''
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarcticallllllllllllllllllllllllllllllllllllllllllllllllllllllllll
                            llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
                            llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll'''
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarcticallllllllllllllllllllllllllllllllllllllllllllllllllllllllll
                            llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
                            llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll'''
                        </Typography>
                    </CardContent>
                
                <CardActions>
                    <Button  variant="contained" className="button" size="large" color="primary" >
                    START
                    </Button>
                </CardActions>
                </Card>
                <Divider variant="inset"  />
                <Card className="cardHome">
                    <img className="imagenSeccion1" src="https://getconnected.honeywellhome.com/en/sites/getconnected.honeywell.com.en/files/lyric_to_home.png"></img>
                    <CardContent>
                        <ThemeProvider theme={theme}>
                            <Typography color="primary" className="titleSeccion" variant="h3" component="h4" gutterBottom >
                                EVENTOS & ACTIVIDADES
                            </Typography>   
                        </ThemeProvider>                            
                        <Typography  variant="subtitle1" color="textSecundary" component="p" gutterBottom>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Typography>
                        <Typography  variant="subtitle1" color="textSecundary" component="p" gutterBottom>
                            Participa en los eventos del proyecto de tu agrado
                        </Typography>
                        
                    </CardContent>

                </Card>
                <Divider variant="inset"  />
                <Card className="cardHome">
                    <img className="imagenSeccion2" src="https://getconnected.honeywellhome.com/en/sites/getconnected.honeywell.com.en/files/lyric_to_home.png"></img>
                    <CardContent>
                        <ThemeProvider theme={theme}>
                            <Typography color="primary" className="titleSeccion" variant="h3" component="h4" gutterBottom >
                                PROYECTOS START
                            </Typography>   
                        </ThemeProvider>                            
                        <Typography  variant="subtitle1" color="textSecundary" component="p" gutterBottom>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Typography>
                        <Typography  variant="subtitle1" color="textSecundary" component="p" gutterBottom>
                            Participa en los eventos del proyecto de tu agrado
                        </Typography>
                        
                    </CardContent>

                </Card>
                <Divider variant="inset"  />
                <Card className="cardHome">
                    <img className="imagenSeccion1" src="https://getconnected.honeywellhome.com/en/sites/getconnected.honeywell.com.en/files/lyric_to_home.png"></img>
                    <CardContent>
                        <ThemeProvider theme={theme}>
                            <Typography color="primary" className="titleSeccion" variant="h3" component="h4" gutterBottom >
                                LOGROS & RECOMPENSAS
                            </Typography>   
                        </ThemeProvider>                            
                        <Typography  variant="subtitle1" color="textSecundary" component="p" gutterBottom>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Typography>
                        <Typography  variant="subtitle1" color="textSecundary" component="p" gutterBottom>
                            Participa en los eventos del proyecto de tu agrado
                        </Typography>
                        
                    </CardContent>

                </Card>
        </div>

    )
}

export default Home;

import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
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
            {location.pathname === '/' && (
                
                <Card className="cardHome">
                    
                        <CardMedia
                            style={{maxWidth: 500}}
                            image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Home_Icon.svg/2048px-Home_Icon.svg.png"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <ThemeProvider theme={theme}>
                                <Typography className="titleSeccion" variant="h1" component="h2" gutterBottom >
                                    HAZTE STARTER
                                </Typography>   
                            </ThemeProvider>
                            
                            <Typography className="textHome" variant="body2" color="textPrimary" component="p">
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
                    
            )}
        </div>

    )
}

export default Home

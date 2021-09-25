import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TabsProfile from './TabsProfile';


const useStyles = makeStyles((theme)=>({
    root: {
      position: 'absolute',
      left: '50%', top: '80vh',
      transform: 'translate(-50%, -50%)',
      width: '60%',
      height: '60%',
      backgroundColor: '#6599BC',
      display:'inline',
    },
    pos: {
      marginBottom: 12,
      marginTop:24,
      backgroundColor: '#cfe8fc',
      height: '6vh',
      width: '50vh',
    },
    rol:{
      marginTop:15,
      padding:'10px',
      height:'30px',
    },
    paper:{
      padding:'10px',
      height:'150px',
    },
  }));

function ProfileCard() {
    const classes = useStyles();
    return (
    <Card className={classes.root}>
      <CardContent>
         <TabsProfile/>
         <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper className={classes.rol}>
           Rol
          </Paper>
        </Grid>
        <Grid item xs={6}>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Descripcion Personal
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Datos Personales
          </Paper>
        </Grid>
      </Grid>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}

export default ProfileCard


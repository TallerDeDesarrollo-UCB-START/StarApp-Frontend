import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import PerfilDefault from '../images/PerfilDefault.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: 'auto',
  },
  Name:{
    transform: 'translate(-60vh, 0vh)',
  }
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Imagen de Perfil" src= {PerfilDefault} className={classes.large}/>
      <Typography variant="h6" className={classes.Name}>
        Nombre Generico
      </Typography>
    </div>
  );
}

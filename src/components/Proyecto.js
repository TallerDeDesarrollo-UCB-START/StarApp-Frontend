import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';


export default function Proyecto({proyecto}) {
  const classes = styles;
  return (
    <Container>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {proyecto.titulo}
        </Typography>
        <Typography variant="body2" component="p">
          {proyecto.descripcion}
        </Typography>
      </CardContent>
    </Card>
    </Container>
  );
}

const styles = {
    border:"4px solid blue",
    marginTop:"5%"
}
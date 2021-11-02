// Componentes:
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import TarjetaCategoriaProyecto from '../moleculas/TarjetaCategoriaProyecto'
// Permisos/Roles:
// Librerias-Paquetes:
import {useState, useEffect} from 'react'

const useStyles = makeStyles(() => ({
    container: {
        padding: '0 10px',
    },
    item: {
        height: '200px',
    },
}));
const ambiental = 'https://media.istockphoto.com/photos/mount-hood-oregon-picture-id1268487061?b=1&k=20&m=1268487061&s=170667a&w=0&h=3fHYwaImlqUETcjCnSV7YO2-PzCFvaX6VSQaiGfWqpc='
const animalista = 'https://media.istockphoto.com/photos/female-veterinarian-holding-a-little-dog-in-her-arms-picture-id1280869192?b=1&k=20&m=1280869192&s=170667a&w=0&h=Fhsw2VrPIhhmKz1gSAjqS7lH_s0KNUSVO9-Obi7CFJE='
const social = 'https://media.istockphoto.com/photos/life-is-amazing-when-you-have-the-greatest-friends-around-picture-id648817898?b=1&k=20&m=648817898&s=170667a&w=0&h=9OGTLvfpfy4Ce4BM__-yDb9RlErBGJRMv7irZMhFLfY='

function ContenidoCategoriasProyectos({categorias}) {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Grid container spacing={4}>
                {categorias.map(categoria => (
                    <Grid item key={categoria.id} xs={12} sm={6} md={4} lg={3} className={classes.item}> 
                        <TarjetaCategoriaProyecto imagen={categoria.imagen} categoria={categoria.tipo}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
export default ContenidoCategoriasProyectos;

/* 
 <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4} lg={3} className={classes.item}> 
                    <TarjetaCategoriaProyecto imagen={ambiental} categoria={"ambiental"}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className={classes.item}> 
                    <TarjetaCategoriaProyecto imagen={animalista} categoria={"animalista"}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className={classes.item}> 
                    <TarjetaCategoriaProyecto imagen={social} categoria={"social"}/>
                </Grid>
            </Grid>
*/
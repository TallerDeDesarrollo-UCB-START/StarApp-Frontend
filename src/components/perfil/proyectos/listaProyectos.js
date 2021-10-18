import React, { useEffect, useState} from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles} from '@material-ui/core'
import axios from 'axios';
import { useMediaQuery } from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    section: {
        width:'100%',
    },
    containerSearchField:{
        display: 'flex',
        width:'100%',
        justifyContent:'space-between'
    },
    smallContainerSearchField:{
        display: 'flex',
        width:'100%',
        flexDirection: 'column',
    },
    containerTable:{
        height: 400,
        width: '100%',
    }
}))

const obtenerParticipacionProyecto = async () => {
    const idSesion = sessionStorage.getItem("id");
    const response = await fetch(
      `${baseURL}/${idSesion}/get_my_proyectos`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
  };

const columns = [
    {
        field: 'titulo',
        headerName: 'Titulo',
        width: 200,
    },
    {
        field: 'lider',
        headerName: 'Lider(es)',
        width: 200,
    },
    {
        field: 'estado',
        headerName: 'Estado',
        type: 'phone',
        width: 200,
    },
    {
        field: 'categoria',
        headerName: 'Categoria',
        width: 200,
    },
    {
        field: 'fecha_inicio',
        headerName: 'Fecha de Inicio',
        width: 270,
        },
];

const url = process.env.REACT_APP_API;
const idSesion = sessionStorage.getItem("id");
const baseURL=`${url}sesion`;
//const baseURL=`${url}sesion/${idSesion}/get_my_proyectos`;
//const baseURL=`${url}extended_form`
//app.get("/sesion/:id_autenticacion/get_my_proyectos",async(req,res)=>

function ListaProyectos () {
    const classes = useStyles()
    const [data, setData] = useState([])
    const [originalData, setOriginalData] = useState([])
    const smallScreen = useMediaQuery('(min-width:700px)')
    const usersGet = async() => (
        await axios.get(baseURL)
        .then( response => {
            var resp = response.data
            var ids = 0
            resp = resp.map((proyecto) => {
                ids = ids + 1
                return {...proyecto, id:ids}
            })
            setData(resp);
            setOriginalData(resp);
        }).catch( error => {
            console.log(error)
        })
    )

    useEffect( () => {
        obtenerParticipacionProyecto();
    }, [])

    return (
        <section className={classes.section}>
            <div className={(smallScreen)?classes.containerSearchField: classes.smallContainerSearchField}>
                
            </div>
            <div className={classes.containerTable}>
                <DataGrid 
                    columns={columns}
                    rows={data}
                    pageSize={20}
                /> 
            </div>
        </section>
        
    )
}

export default ListaProyectos
import React, { useEffect, useState} from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles, Button } from '@material-ui/core'
import axios from 'axios';
import SearchField from '../components/SearchByField'

const useStyles = makeStyles((theme)=>({
    section: {

    },
    containerSearchField:{

    },
    containerTable:{
        height: 400,
        width: '100%',
    }
}))

const columns = [
    {
      field: 'nombre',
      headerName: 'Nombre(s)',
      width: 250,
    },
    {
      field: 'apellido',
      headerName: 'Apellido(s)',
      width: 250,
    },
    {
      field: 'telefono',
      headerName: 'Telefono',
      type: 'phone',
      width: 250,
    },
    {
       field: 'rol',
       headerName: 'Rol',
       width: 250,
    },
    {
       field: 'ciudad_de_recidencia',
       headerName: 'Ciudad',
       width: 250,
     },
];


const baseURL = "https://dev-back-startamericas.herokuapp.com/extended_form";

function Users () {

    const classes = useStyles()

    const [user, setUser] = useState([]);

    const [fieldSelector, setFieldSelector] = useState('Nombre')


    const usersGet = async() => (
        await axios.get(baseURL)
        .then( response => {
            //console.log(response.data.data);
            var data = response.data.data
            var ids = 0
            data = data.map((person) => {
                ids = ids + 1
                return {...person, id:ids}
            })
            setUser(data);
        }).catch( error => {
            console.log(error);
        })
    )

    useEffect( () => {
        usersGet();
    }, [])

    return (
        <section className={classes.section}>
            <div className={classes.containerSearchField}>
                <Button>Descargar</Button>
                {/* <SearchField fieldSelector={fieldSelector} setFieldSelector={setFieldSelector} data={rows}/> */}
            </div>
            <div className={classes.containerTable}>
                <DataGrid 
                    columns={columns}
                    rows={user}
                    pageSize={5}
                /> 
            </div>
        </section>
        
    )
}

export default Users

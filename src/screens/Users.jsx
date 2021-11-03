import React, { useEffect, useState} from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles} from '@material-ui/core'
import axios from 'axios';
import SearchField from '../components/SearchByField'
import {useMediaQuery} from '@material-ui/core'
import DownloadButton from '../components/DownloadExcelButton'

const useStyles = makeStyles((theme)=>({
    section: {
        width:'60%',
        margin:'50px auto',
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

const columns = [
    {
        field: 'nombre_completo',
        headerName: 'Nombre',
        width: 200,
    },
    {
        field: 'fecha_de_nacimiento',
        headerName: 'Edad',
        width: 128,
    },
    {
        field: 'genero',
        headerName: 'Género',
        width: 150,
    },
    {
        field: 'ocupacion',
        headerName: 'Ocupación',
        width: 180,
    },
    {
        field: 'carrera',
        headerName: 'Carrera',
        width: 200,
    },
    {
        field: 'telefono',
        headerName: 'Telefono',
        type: 'phone',
        width: 200,
    },
    {
        field: 'ciudad_de_recidencia',
        headerName: 'Ciudad de Residencia',
        width: 200,
    },
    {
        field: 'pais_de_recidencia',
        headerName: 'Pais de Residencia',
        width: 200,
    },
    {
        field: 'nombre_contacto_de_emergencia',
        headerName: 'Persona de Contacto',
        width: 200,
    },
    {
        field: 'numero_contacto_de_emergencia',
        headerName: 'Número de contacto',
        width: 200,
    },
    {
        field: 'estado_de_disponibilidad',
        headerName: 'Disponibilidad',
        width: 200,
    },
    {
        field: 'rol',
        headerName: 'Rol',
        width: 200,
    },
];

const url = process.env.REACT_APP_API
const baseURL=`${url}extended_form`
const calculateAge = (birthday) => { // birthday is a date
    birthday = new Date(birthday)
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function Users () {
    const classes = useStyles()
    const [data, setData] = useState([])
    const [originalData, setOriginalData] = useState([])
    const smallScreen = useMediaQuery('(min-width:700px)')
    console.log(data)
    const usersGet = async() => (
        await axios.get(baseURL)
        .then( response => {
            var resp = response.data.data
            var ids = 0
            resp = resp.map((person) => {
                ids = ids + 1
                return {...person, 
                    id:ids, 
                    nombre_completo:`${person.nombre} ${person.apellido}`,
                    fecha_de_nacimiento: calculateAge(person.fecha_de_nacimiento).toString(),
                    nombre_contacto_de_emergencia: `${person.nombre_contacto_de_emergencia} (${person.relacion_contacto_de_emergencia})`,
                }
            })
            setData(resp);
            setOriginalData(resp);
        }).catch( error => {
            console.log(error)
        })
    )

    useEffect( () => {
        usersGet();
    }, [])

    return (
        <section className={classes.section}>
            <div className={(smallScreen)?classes.containerSearchField: classes.smallContainerSearchField}>
                <DownloadButton data={data}/>
                <SearchField data={data} setData={setData} originalData={originalData}/>
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

export default Users

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
        field: 'nombre',
        headerName: 'Nombre(s)',
        width: 200,
    },
    {
        field: 'apellido',
        headerName: 'Apellido(s)',
        width: 200,
    },
    {
        field: 'telefono',
        headerName: 'Telefono',
        type: 'phone',
        width: 200,
    },
    {
        field: 'rol',
        headerName: 'Rol',
        width: 200,
    },
    {
        field: 'ciudad_de_recidencia',
        headerName: 'Ciudad',
        width: 200,
        },
];

const url = process.env.REACT_APP_API
const baseURL=`${url}extended_form`

function Users () {
    const classes = useStyles()
    const [data, setData] = useState([])
    const [originalData, setOriginalData] = useState([])
    const smallScreen = useMediaQuery('(min-width:700px)')
    const usersGet = async() => (
        await axios.get(baseURL)
        .then( response => {
            var resp = response.data.data
            var ids = 0
            resp = resp.map((person) => {
                ids = ids + 1
                return {...person, id:ids}
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

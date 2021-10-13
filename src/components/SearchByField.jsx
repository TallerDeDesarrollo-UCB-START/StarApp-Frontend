import React, {useState} from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { makeStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import {useMediaQuery} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  container:{
    display: 'flex',
    alignItems:'center',
    justifyContent:'center',
    width:'40%',
    minWidth:'280px'
  },
  smallContainer:{
    display: 'flex',
    alignItems:'center',
    flexDirection:'column',
    width:'100%',
  },
  formControl: {
    minWidth: 110,
    margin: '10px',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  searchField:{
    width:'100%',
    minWidth: 150,
  },
}))
const fields = {
    'Nombre':'nombre',
    'Apellido':'apellido',
    'Teléfono':'telefono',
    'Rol':'rol',
    'Ciudad':'ciudad_de_recidencia',
}
const SearchByField = ({data, setData, originalData}) => {
    const idSearchInput = "search-input"
    const classes = useStyles()
    const [fieldSelected, setFieldSelected] = useState('')
    const smallScreen = useMediaQuery('(min-width:700px)')
    const handleChange = (event) => {
        setFieldSelected(event.target.value)
    }
    return (
        <section className={(smallScreen)?classes.container:classes.smallContainer}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">Criterio</InputLabel>
              <Select
                native
                value={fieldSelected}
                onChange={handleChange}
                label="Buscar por"
                inputProps={{
                  name: 'searchBy',
                  id: 'outlined-age-native-simple',
                }}
              >
                <option aria-label="Ninguno" value="" />
                {Object.keys(fields).map((field)=>(
                    <option key={field} value={field}>{field}</option>
                ))}
              </Select>
            </FormControl>
            <Autocomplete
                className={classes.searchField}
                id={idSearchInput}
                onChange={(event, newValue) => {
                  const value = newValue
                  if(value){
                    if(value === 'Sin Datos'){
                      setData(originalData.filter((user)=> user[fields[fieldSelected]]===null))
                    }
                    else{
                      setData(originalData.filter((user)=> user[fields[fieldSelected]]===value))
                    }
                  }
                  else{
                    setData(originalData)
                  }
                }}
                freeSolo
                options={[...new Set(data.map((option) => (option[fields[fieldSelected]])?option[fields[fieldSelected]]:'Sin Datos'))]}
                renderInput={(params) => (
                <TextField {...params} label="buscar" margin="normal" variant="outlined"/>
                )}
            />
        </section>
    )
}

export default SearchByField

import React from 'react'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Chip from '@material-ui/core/Chip'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const useStyles = makeStyles((theme) => ({
    fieldSelector: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    searchField:{

    },
}))
function getStyles(field, fieldSelector, theme) {
    return {
        fontWeight:
        fieldSelector.indexOf(field) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
    };
}
const fields = [
    'Nombre',
    'Apellido',
    'Teléfono',
    'Rol',
    'Ciudad',
]
const SearchByField = ({fieldSelector,setFieldSelector,data}) => {
    const classes = useStyles()
    const theme = useTheme();
    const handleChange = (event) => {
        setFieldSelector(event.target.value);
      };
    return (
        <section>
            <FormControl className={classes.fieldSelector}>
                <InputLabel id="demo-mutiple-chip-label">Buscar por</InputLabel>
                <Select
                labelId="demo-mutiple-chip-label"
                id="demo-mutiple-chip"
                multiple
                value={fieldSelector}
                onChange={handleChange}
                input={<Input id="select-multiple-chip" />}
                renderValue={(selected) => (
                    <div className={classes.chips}>
                    {selected.map((value) => (
                        <Chip key={value} label={value} className={classes.chip} />
                    ))}
                    </div>
                )}
                MenuProps={MenuProps}
                >
                {fields.map((field) => (
                    <MenuItem key={field} value={field} style={getStyles(field, fieldSelector, theme)}>
                    {field}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
            <Autocomplete
                className={classes.searchField}
                id="free-solo-demo"
                freeSolo
                options={data.map((option) => option[fieldSelector])}
                renderInput={(params) => (
                <TextField {...params} label="freeSolo" margin="normal" variant="outlined" />
                )}
            />
        </section>
    )
}

export default SearchByField

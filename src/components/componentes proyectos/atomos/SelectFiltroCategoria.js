import { Select } from "@material-ui/core"
import { FormControl } from "@material-ui/core"
import { MenuItem } from "@material-ui/core"
import { InputLabel } from "@material-ui/core"



function SelectFiltroCategoria({onFiltroProy}) {

    const [categoria, setCategoria] = useState('')


    const handleChange = (event) => {
        switch(event.target.value) {
            case 1:
                onFiltroProy('Medio');
                break;
            case 2:
                onFiltroProy('Animalista');
                break;
            case 3:
                onFiltroProy('Social');
                break;
            default:
                onFiltroProy('');
                break;
        }
    setCategoria(event.target.value)
        
        
    };
    return (
        <div>
            <FormControl variant="standard" className="form-control" >
                <InputLabel id="demo-simple-select-standard-label">Categoria</InputLabel>
                <Select labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={categoria}
                onChange={handleChange}
                label="Age">
                    <MenuItem value="Todos">
                        <em>Todos</em>
                    </MenuItem>
                    <MenuItem value={1}>Medio Ambiental</MenuItem>
                    <MenuItem value={2}>Animalista</MenuItem>
                    <MenuItem value={3}>Social</MenuItem>

                </Select>
            </FormControl>
           
        </div>
        
    )
}
export default SelectFiltroCategoria
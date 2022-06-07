import '../moleculas/FormularioCrearProyecto.css'
import { MenuItem } from '@material-ui/core';
import MySelect from '../../select';

function DynamicDropdown({ elements, value, onChange, idField, labelField, titulo }) {
    // FUNCIONES:
    function getElementId(element){
        const elementId = element[idField] === "string"? parseInt(element[idField]) : element[idField]
        return elementId
    }
    // RENDER:
    return (
        <div>
            {/*NOTE: Dropwdown CATEGORIAS*/}
            <div  style={{marginTop: "20px", marginBottom: "20px", padding:"10px 0px 0px 10px"}}>
                <MySelect
                    placeholder={titulo}
                    value={value}
                    onChange={onChange}
                >
                    {
                        elements.map(element => (
                            <MenuItem key={ getElementId(element) } 
                                    value={ getElementId(element) }>
                                        {element[labelField]}
                            </MenuItem>
                        ))
                    }
                </MySelect>
            </div>
        </div>
    );
}

export default DynamicDropdown

//import { useFormContext } from "react-hook-form";

function InputTexto({titulo, type,  value, placeHolder, onChange, nameId, options}) {
    //const { register } = useFormContext();
    return (
        <div className='form-control-proy'>
            <label>{titulo}</label>

            <input type={type}
                placeholder={placeHolder}
                //name={nameId}
                //id={nameId}
                value={value}
                onChange={onChange}
                //{...register(nameId, options)}
                //{...register("example")}
            />
        </div>
    )
}

export default InputTexto

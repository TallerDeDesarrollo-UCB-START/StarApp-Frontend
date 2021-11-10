
function InputTexto({titulo, type,  value, placeHolder, onChange}) {
    return (
        <div className='form-control-proy'>
            <label>{titulo}</label>

            <input type={type}
                placeholder={placeHolder}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default InputTexto

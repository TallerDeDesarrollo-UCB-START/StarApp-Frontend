
function InputTexto({titulo, value, placeHolder, onChange}) {
    return (
        <div className='form-control-proy'>
            <label>{titulo}</label>

            <input type='text'
                placeholder={placeHolder}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default InputTexto

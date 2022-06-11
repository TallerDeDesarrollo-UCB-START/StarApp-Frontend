import { useFormContext, Controller } from "react-hook-form";
import { InputLabel } from '@material-ui/core';


function InputFile({tituloLabel,value, nameId, onChangeImagen, filesAllowed}) {
    const { control } = useFormContext();
    return (
        <Controller
                name={nameId}
                control={control}
                defaultValue={value}
                render={ () => (
                    <>
                        <InputLabel style={{fontSize: "17px", padding:"10px 0px 0px 10px"}}>{tituloLabel}</InputLabel>
                        <InputLabel id="nameOfImage" style={{fontSize: "17px", padding:"10px 0px 0px 10px", display:"none"}}></InputLabel>
                        <div className='form-control-proy'>
                        <input
                                                    id="imageField"
                                                    style={{fontSize: "17px", color: "transparent"}}
                                                    type="file"
                                                    accept={filesAllowed}
                                                    onChange={onChangeImagen}
                                                    />
                            
                        </div>
                        <p id="inputMessageError" style={{color: 'red', fontSize: "0.8em", display:"none"}}></p>
                    </>
                )}
        />
        
    )
}

export default InputFile
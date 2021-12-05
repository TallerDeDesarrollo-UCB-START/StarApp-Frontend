import { useFormContext, Controller } from "react-hook-form";
import { InputLabel } from '@material-ui/core';


function InputTexto({tituloLabel, type,  value, placeHolder, onChange, nameId, options, estilosValidar}) {
    const { register,
        control,
        formState: { errors }, } = useFormContext();
    //  console.log(value)
    function applyErrorStyles(){
        //NOTE: Agregar variables que conforman un className para estilos de error para
        //       O activar alguna variable que active un mensaje de error
        //       O hacer todo lo anterior, quizas usando useState o quizas solo const
    }
    const validations = options? options : {}
    return (
        <Controller
                name={nameId}
                control={control}
                defaultValue={value} //Importante para recuperar datos ya existentes
                render={ ({ field }) => (
                    <>
                        <InputLabel style={{fontSize: "17px", padding:"10px 0px 0px 10px"}}>{tituloLabel}</InputLabel>
                        <div className='form-control-proy'>
                            <input  validations
                                {...field}
                                {...register(`${nameId}`, validations)}
                                type={type}
                                placeholder={placeHolder}
                                value={value}
                                onChange={onChange}
                                options="dummy"
                                style={{color: "black", border: "1px solid grey"}}
                                //ref={{...register('titulo', {required: true})}}
                            />
                            {/*errors.titulo && estilosValidar()*/}
                        </div>
                    </>
                )

                }
                
        />
        
    )
}

export default InputTexto


/*<div className='form-control-proy'>
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
    )*/
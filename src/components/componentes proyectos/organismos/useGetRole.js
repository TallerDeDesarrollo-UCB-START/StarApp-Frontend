import { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import RedirectErrorPage from '../../redirect status/RedirectErrorPage';
function useGetRole() {
    const [rol, setRol] = useState('none')
    const mountedRef = useRef(false)
    const history = useHistory();
    useEffect(async () => {
        try{
            mountedRef.current = true
            const obtenerRol = async () => {
                const idAuth = sessionStorage.getItem("id");
                const response = await fetch(`${URLObtenerRol}/${idAuth}`,
                { 
                    method: 'GET'
                }).catch((error)=>
                {
                    console.log(error);
                    if (error.message == "Failed to fetch"){
                        throw new Error("Network Error");
                    }
                    throw error;
                });
                const data = await response.json();
                mountedRef.current && setRol(data[0].rol)
            }
            await obtenerRol()
            return () => mountedRef.current = false;// Desmontar componentes evitando warnings
        }catch(error){
            if (error.message == "Network Error"){
                RedirectErrorPage(500,history,"Hubo un error en la conexión con los datos.");
                return;
            }
            console.log(error);
            throw error;
        }
    }, [])

    return rol
}
const url = process.env.REACT_APP_API;
const URLObtenerRol = `${url}get_rol`;
export default useGetRole
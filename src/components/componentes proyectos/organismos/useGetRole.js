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
                    throw error;
                });
                const data = await response.json();
                mountedRef.current && setRol(data[0].rol)
            }
            await obtenerRol()
            return () => mountedRef.current = false;// Desmontar componentes evitando warnings
        }catch(error){
            console.log(error);
            throw error;
        };
    }, [])

    return rol
}
const url = process.env.REACT_APP_API;
const URLObtenerRol = `${url}get_rol`;
export default useGetRole
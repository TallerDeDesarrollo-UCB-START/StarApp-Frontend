import { useState, useEffect, useRef } from 'react';

function useGetRole() {
    const [rol, setRol] = useState('none')
    const mountedRef = useRef(false)
    useEffect(() => {
        try{
            mountedRef.current = true
            const obtenerRol = async () => {
                const idAuth = sessionStorage.getItem("id");
                const response = await fetch(`${URLObtenerRol}/${idAuth}`,
                { 
                    method: 'GET'
                });
                const data = await response.json();
                mountedRef.current && setRol(data[0].rol)
            }
            obtenerRol()
            return () => mountedRef.current = false;// Desmontar componentes evitando warnings
        }catch(error){
            console.log(error);
        };
    }, [])

    return rol
}
const url = process.env.REACT_APP_API;
const URLObtenerRol = `${url}get_rol` //'http://localhost:5000/get_rol/'
export default useGetRole
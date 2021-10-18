import { useState, useEffect } from 'react';

function useGetRole() {
    const [rol, setRol] = useState('voluntario')
    
    useEffect(() => {
        //debugger;
        let controller = new AbortController();
        const obtenerRol = async () => {
            const idAuth = sessionStorage.getItem("id");
            const response = await fetch(`${URLObtenerRol}/${idAuth}`,
            { 
                method: 'GET'
            },
            {
                signal: controller.signal
            });
            const data = await response.json();
            //console.log(data[0].rol)
            setRol(data[0].rol)
            controller = null
        }
        obtenerRol()
        return () => controller?.abort();
    }, [])

    return rol
}
const url = process.env.REACT_APP_API;
const URLObtenerRol = `${url}get_rol` //'http://localhost:5000/get_rol/'
export default useGetRole
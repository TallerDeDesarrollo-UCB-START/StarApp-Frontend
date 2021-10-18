import { useState, useEffect } from 'react';

function useGetRole() {
    const [rol, setRol] = useState('voluntario')
    
    useEffect(() => {
        //debugger;
        const obtenerRol = async () => {
            const idAuth = sessionStorage.getItem("id");
            const response = await fetch(`${URLObtenerRol}/${idAuth}`,
            { 
                method: 'GET'
            });
            const data = await response.json();
            //console.log(data[0].rol)
            setRol(data[0].rol)
        }
        obtenerRol()
    }, [])

    return rol
}
const url = process.env.REACT_APP_API;
const URLObtenerRol = `${url}get_rol` //'http://localhost:5000/get_rol/'
export default useGetRole
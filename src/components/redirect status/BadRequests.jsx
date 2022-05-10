const BadRequests = (status) => {
    let message = "Sucedio un error.";
    switch (status) {
        case 203:
            message = "El servidor obtuvo un error al recibir la peticion.";
            break;         
        case 400:
            message = "El servidor intento responder una solicitud invalida.";
            break;
        case 401:
            message = "Acceso no autorizado pero, se require autenticar.";
            break;
        case 403:
            message = "No cuenta con recursos para obtener el contenido.";
            break;
        case 404:
            message = "El servidor no hallo el contenido solicitado.";
            break;
        case 405:
            message = "Metodo desahabilitado por el servidor.";
            break;
        case 424:
            message = "El servidor necesito una peticion previa.";
            break;
        case 226:
            message = "El servidor solicita un protocolo mas reciente, se necesita actualizar el protocolo actual.";
            break;
        case 429:
            message = "Se envio muchas respuestas al servidor en un tiempo corto.";
            break;
        case 451:
            message = "El servidor no puede acceder a un recurso ilegal, el contenido probablemente fue censurado por una entidad mayor.";
            break;
        case 500:
            message = "El servidor hallo una situacion que no sabe manejarla, contactese con el dueño.";
            break;
        case 501:
            message = "El metodo solicitado no esta soportado por el servidor.";
            break;
        case 502:
            message = "El metodo solicitado no esta soportado por el servidor.";
            break;       
        case 503:
            message = "El servidor no se encuentra disponible para esa peticion.";
            break
        case 505:
            message = "La version de HTTP usada no lo puede soportar el servidor.";
            break;    
        case 506:
            message = "La version de HTTP usada no lo puede soportar el servidor.";
            break;
        
    }
    return message + " codigo : " + status;
}

export default BadRequests
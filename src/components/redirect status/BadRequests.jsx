const BadRequests = (status) => {
    let message = "Sucedio un error.";
    switch (status) {
        case 400:
            message = "El servidor intentó responder una solicitud inválida.";
            break;
        case 401:
            message = "Acceso no autorizado se requiere una autentificación.";
            break;
        case 403:
            message = "No cuenta con recursos para obtener el contenido.";
            break;
        case 404:
            message = "No se encuentra el contenido solicitado.";
            break;
        case 405:
            message = "Método deshabilitado por el servidor.";
            break;
        case 424:
            message = "El servidor necesito una petición previa.";
            break;
        case 426:
            message = "El servidor solicita un protocolo más reciente, se necesita actualizar el protocolo actual.";
            break;
        case 429:
            message = "Se envio muchas respuestas al servidor en un tiempo corto.";
            break;
        case 451:
            message = "El servidor no puede acceder a un recurso ilegal, el contenido probablemente fue censurado por una entidad mayor.";
            break;
        case 500:
            message = "El servidor halló una situación que no pudo manejarla, contáctese con el dueño.";
            break;
        case 501:
            message = "El método solicitado no está soportado por el servidor.";
            break;
        case 502:
            message = "El método solicitado no está soportado por el servidor.";
            break;       
        case 503:
            message = "El servidor no se encuentra disponible para esa petición.";
            break
        case 505:
            message = "La versión de HTTP usada no lo puede soportar el servidor.";
            break;    
        case 506:
            message = "La versión de HTTP usada no lo puede soportar el servidor.";
            break;
        
    }
    return message;
}

export default BadRequests
import routes from "../../routes/Routes";
import { useHistory } from "react-router-dom";
function RedirectErrorPage(status, history,message="El servidor respondio:") 
{
    sessionStorage.setItem("statusError",status);
    sessionStorage.setItem("errorMessage",message);
    history.push(routes[19].path);
}

export default RedirectErrorPage
import { useHistory } from "react-router-dom";
import routes from "../../routes/Routes";
const RedirectErrorPage = (status, history, message="El servidor respondio:") => 
{
    if (status === undefined) {
        status = 500;
      }
    sessionStorage.setItem("statusError",status);
    sessionStorage.setItem("errorMessage",message);
    history.push(routes[19].path);
}

export default RedirectErrorPage
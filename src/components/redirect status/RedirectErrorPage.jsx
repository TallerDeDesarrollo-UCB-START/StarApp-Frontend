import { useHistory } from "react-router-dom";
import routes from "../../routes/Routes";
const RedirectErrorPage = (status, history) => 
{
    if (status === undefined) {
        status = 500;
      }
    sessionStorage.setItem("statusError",status);
    history.push(routes[19].path);
}

export default RedirectErrorPage
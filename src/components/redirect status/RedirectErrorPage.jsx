import routes from "../../routes/Routes";
function RedirectErrorPage(status, history,message="El servidor respondio:") 
{
    sessionStorage.setItem("statusError",status);
    sessionStorage.setItem("errorMessage",message);
    history.push(routes[15].path);
}

export default RedirectErrorPage
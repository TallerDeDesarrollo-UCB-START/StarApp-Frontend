import LoginForm from "../components/LoginForm";
import Register from "../screens/Register";
import EventsList from "../components/EventsList";
import Home from "../components/Home/Home";
import Profile from "../components/Profile";
import VistaProyectos from "../components/componentes proyectos/paginas/VistaProyectos";
import Evento from "../components/Evento";
import Users from "../components/UsersTable/Users"
import VistaProyectoIndividual from "../components/componentes proyectos/paginas/VistaProyectoIndividual"
import VistaCategoriasProyectos from "../components/componentes proyectos/paginas/VistaCategoriasProyectos"
import ValidateView from "../screens/ValidateView";
import ResetPassword from "../screens/ResetPassword";
import { ResetNewPassword } from "../screens/ResetNewPassword";
import ErrorPage from "../components/redirect status/ErrorPage";

const Routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    logginNeeded: false,
  },
  {
    path: '/projects/categories',
    name: 'ShowProjectsCategories',
    component: VistaCategoriasProyectos,
    logginNeeded: true,
  },
  {
    path: "/eventos",
    name: "EventsList",
    component: EventsList,
    logginNeeded: true,
  },
  {
    path: "/cuenta",
    name: "Cuenta",
    component: Profile,
    logginNeeded: true,
  },
  {
    path: "/login",
    name: "Inicio de sesion",
    component: LoginForm,
    logginNeeded: false,
  },
  {
    path: "/register",
    name: "Registro",
    component: Register,
    logginNeeded: false,
  },
  {
    path: "/users",
    name: "Usuarios",
    component: Users,
    logginNeeded: true,
  },
  {
    path: "/estarutanosirve",
    name: "CreateProject",
    component: Users,
    logginNeeded: true,
  },
  {
    path: "/estarutanosirve",
    name: "Evento",
    component: Users,
    logginNeeded: true,
  },
  {
    path: "/eventos/:id",
    name: "Evento",
    component: Evento,
    logginNeeded: true,
  },
  {
    path: '/projects',
    name: 'ShowProjects',
    component: VistaProyectos,
    logginNeeded: true,
  },
  {
    path: "/projects/:id",
    name: "ProyectoIndividual",
    component: VistaProyectoIndividual,
    logginNeeded: true,
  },
  {
    path: "/validate/:id",
    name: "ValidacionCorreo",
    component: ValidateView,
    logginNeeded: true,
  },
  {
    path: "/reset_password",
    name: "RecuperarContrasena",
    component: ResetPassword,
    logginNeeded: false,
  },
  {
    path: "/recover/:id",
    name: "RecuperarNuevaContrasena",
    component: ResetNewPassword,
    logginNeeded: false,
  },
  {
    path: "/error",
    name: "RedireccionErrorPagina",
    component: ErrorPage,
    logginNeeded: false,
  }
];
export default Routes;

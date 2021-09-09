import LoginForm from '../components/LoginForm'
import Register from '../screens/Register'
import EventsList from '../components/EventsList'
import Home from '../components/Home'
import Profile from '../components/Profile'
import Event from '../components/Event'
import Formulario from '../components/Formulario-evento.component/Formulario'
import Attendance from '../components/Attendance'
import crearEvento from '../components/CrearEvento/crearEvento'


const Routes = [
  {
    path: '/login',
    name: 'Inicio de sesion',
    component: LoginForm,
  },
  {
    path: '/register',
    name: 'Registro',
    component: Register,
  },
  {
    path: '/events',
    name: 'EventsList',
    component: EventsList,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: Profile,
  },
  {
    path: '/events/event',
    name: 'Evento',
    component: Event,
  },
  {
    path: '/events/event/registroAEvento',
    name: 'Formulario',
    component: Formulario ,
  },
  {
    path: '/events/event/attendance',
    name: 'Attendace',
    component: Attendance,
  },
  {
    path: '/events/crearevento',
    name: 'crearEvento',
    component: crearEvento,
  },

  
]
export default Routes

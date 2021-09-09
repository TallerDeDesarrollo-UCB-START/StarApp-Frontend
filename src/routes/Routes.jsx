import LoginForm from '../componentes/LoginForm'
import Register from '../screens/Register'

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
]
export default Routes

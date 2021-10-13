import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Logo from '../../assets/logo.png';
import './header.css';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { useHistory } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import routes from '../../routes/Routes'
import LoggoutButton from './logoutButton'
import verifier from '../../routes/AuthRoutesVerifier'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'

const useStyles = makeStyles((theme)=> ({
    root: {
      width: "100%",
      background: "none",
    },
    activeNavButton: {
        borderBottom: "solid"
    },
    navButton: {
        borderBottom: "none"
    },
    containerLogo: {
        width:"80%",
        display: "flex",
        justifyContent:"center"
    },
  }));

const Header = ({sessionData}) =>{
    const [logged, setLogged] = React.useState(false)
    let location = useLocation()
    const history = useHistory()
    const classes = useStyles()
    const [currentPath, setCurrentPath] = React.useState(location.pathname)
    useEffect(() => {
        if(!Boolean(sessionStorage.getItem("jwt")) && verifier(currentPath).needLoggin){
            history.push(routes[4].path)
        }
        setLogged(Boolean(sessionStorage.getItem("jwt")))
      },[history, currentPath]);
    return(
        <header className="header-division">
            <div className="header-logo">
                <div style={{width:"10%"}}></div>
                <div className={classes.containerLogo}>
                    <img src={Logo} alt=" " className = "header-image"/>
                </div>
                <LoggoutButton logged={logged}/>
            </div>
            <div className="header-menu">
            <BottomNavigation
                currentpath={currentPath}
                onChange={(event, newcurrentPath) => {
                    setCurrentPath(newcurrentPath);
                }}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction 
                    disabled = {(currentPath===routes[0].path)}
                    label="Home"
                    className={(currentPath===routes[0].path)?classes.activeNavButton:classes.navButton} 
                    onClick={()=>(history.push(routes[0].path))} />
                <BottomNavigationAction
                    disabled = {(currentPath===routes[1].path)}
                    label="Proyectos" 
                    className={(currentPath===routes[1].path)?classes.activeNavButton:classes.navButton} 
                    onClick={()=>(history.push(logged?routes[1].path:routes[4].path))} />
                <BottomNavigationAction 
                    disabled = {(currentPath===routes[2].path)}
                    label="Eventos" 
                    className={(currentPath===routes[2].path)?classes.activeNavButton:classes.navButton} 
                    onClick={()=>(history.push(logged?routes[2].path:routes[4].path))} />
                <BottomNavigationAction 
                    disabled = {(currentPath===routes[3].path)}
                    label="Perfil" 
                    className={(currentPath===routes[3].path)?classes.activeNavButton:classes.navButton} 
                    onClick={()=>(history.push(logged?routes[3].path:routes[4].path))} />
                {(sessionData.role !== 'voluntario')?
                    <BottomNavigationAction 
                        disabled = {(currentPath===routes[6].path)}
                        label="Usuarios" 
                        className={(currentPath===routes[6].path)?classes.activeNavButton:classes.navButton} 
                        onClick={()=>(history.push(logged?routes[6].path:routes[4].path))} />
                        : <i></i>
                }
            </BottomNavigation>
                {/* <div className="header-menu-option-icon icons">
                    <FontAwesomeIcon icon={faFacebook}/>
                </div>
                <div className="header-menu-option-icon icons">
                    <FontAwesomeIcon icon={faTwitter}/>
                </div>
                <div className="header-menu-option-icon icons">
                    <FontAwesomeIcon icon={faInstagram}/>
                </div> */}
                
            </div>
        </header>
    )
}

export default Header;

import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Logo from '../../assets/logo.png';
import './header.css';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { useHistory } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Button from '@material-ui/core/Button';
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
    loginButton: {
        width:"10%", 
        marginRight:"30px",
    },
  }));

const Header = () =>{
    const [logged, setLogged] = React.useState(false)
    const routes = {
        "/": 0,
        "/projects": 1,
        "/events": 2,
        "/perfil": 3,
    }
    const keysRoutes = Object.keys(routes)
    let location = useLocation()
    const history = useHistory()
    const classes = useStyles()
    const [value, setValue] = React.useState(routes[location.pathname])
    useEffect(() => {
        if(!Boolean(sessionStorage.getItem("jwt")) && location.pathname !== "/"){
            history.push("/login")
        }
        setLogged(Boolean(sessionStorage.getItem("jwt")))
      },[history, location.pathname]);
    return(
        <header className="header-division">
            <div className="header-logo">
                <div style={{width:"10%"}}></div>
                <div className={classes.containerLogo}>
                    <img src={Logo} alt=" "/>
                </div>
                <Button 
                    className={classes.loginButton} 
                    variant={(logged)?"filled": "outlined"}
                    onClick={()=>history.push("/login")}>
                        {(logged)?"Log out": "Login"}
                </Button>
            </div>
            <div className="header-menu">
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction 
                    label="Inicio" 
                    className={(value===0)?classes.activeNavButton:classes.navButton} 
                    onClick={()=>(history.push(keysRoutes[0]))} />
                <BottomNavigationAction 
                    label="Proyectos" 
                    className={(value===1)?classes.activeNavButton:classes.navButton} 
                    onClick={()=>(history.push(keysRoutes[1]))} />
                <BottomNavigationAction 
                    label="Eventos" 
                    className={(value===2)?classes.activeNavButton:classes.navButton} 
                    onClick={()=>(history.push(keysRoutes[2]))} />
                <BottomNavigationAction 
                    label="Perfil" 
                    className={(value===3)?classes.activeNavButton:classes.navButton} 
                    onClick={()=>(history.push(keysRoutes[3]))} />
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

import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Logo from '../../assets/logo.png';
import './header.css';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { useHistory } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'

const useStyles = makeStyles({
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
  });

const Header = () =>{
    const routes = {
        "/": 0,
        "/projects": 1,
        "/events": 2,
        "/perfil": 3,
    }
    const keysRoutes = Object.keys(routes)
    let location = useLocation()
    const history = useHistory()
    const classes = useStyles();
    const [value, setValue] = React.useState(routes[location.pathname]);
    return(
        <header className="header-division">
            <div className="header-logo">
                <div>
                    <img src={Logo} alt=" "/>
                </div>
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

import React, { useEffect, useState, useLayoutEffect } from "react";
import "./header.css";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import routes from "../../routes/Routes";
import verifier from "../../routes/AuthRoutesVerifier";
import NavigationBar from "./NavigationBar";
import useStyles from "./Header.styles";
import { Chip } from '@material-ui/core';
import LogoutIcon from "@material-ui/icons/ExitToApp";
import { IconButton } from "@mui/material";
import MyButton from "../../shared/components/Button";

const Header = ({ sessionData, children }) => {
  const isMobile = false;
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();

  const [logged, setLogged] = useState(false);

  useEffect(() => {
    if (!Boolean(sessionStorage.getItem("jwt")) && verifier(location.pathname).needLoggin) {
      history.push('/login');
    }
    setLogged(Boolean(sessionStorage.getItem("jwt")));
  }, [history, location.pathname]);

  const useWindowSize = () => {
    const [size, setSize] = useState([0]);

    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth])
      }
      window.addEventListener('resize', updateSize)
      updateSize()
      return () => window.removeEventListener('resize', updateSize)
    }, [])

    return size;
  }

  function logout() {
    sessionStorage.removeItem("jwt");
    window.location.reload();
  }

  const windowWidth = useWindowSize();

  function showHeader() {
    return !(
      location.pathname === '/login' ||
      location.pathname === '/register' ||
      location.pathname === '/reset_password' ||
      location.pathname.includes("/validate") ||
      location.pathname.includes("/recover")
    );
  }

  const {header, headerLogo, containerLogo} = classes;

  return (
    <>
      {showHeader() && (
        <header className={header}>
          <div className={headerLogo}>
            <div className={containerLogo}>
              <img src={"https://i1.wp.com/www.startamericastogether.org/wp-content/uploads/2021/03/LOGO_2020_2.0_STARTER_Horizontal-01-01-1.png?fit=1307%2C435&ssl=1"} alt=" " className="header-image" />
            </div>
            {logged ? (
              <IconButton onClick={logout}>
                <LogoutIcon style={{ color: 'white' }} />
              </IconButton>
            ) : (
              <MyButton className="default" onClick={()=>history.push("/login")}>
                Iniciar Sesión
              </MyButton>
            )}
          </div>
        </header>
      )}
      {showHeader() && !isMobile && (
        <NavigationBar
          currentPath={location.pathname}
          routes={routes}
          logged={logged}
          sessionData={sessionData}
          pagesize={"wide"}
        />
      )}
      <div className={classes.children} style={{marginBottom:"70px", minHeight:"250px"}}>{children}</div>
      {showHeader() && isMobile && (
        <NavigationBar
          currentPath={location.pathname}
          routes={routes}
          logged={logged}
          sessionData={sessionData}
          isMobile={true}
        />
      )}
    </>
  );
};

export default Header;

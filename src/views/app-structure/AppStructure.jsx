import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "@material-ui/core";
import routes from "../../routes/Routes";
import verifier from "../../routes/AuthRoutesVerifier";
import NavigationBar from "./NavigationBar";
import PageContainer from "./PageContainer";
import Header from "./Header";

const AppStructure = ({ sessionData, children }) => {
  const isMobile = !useMediaQuery("(min-width:900px)");
  const location = useLocation();
  const history = useHistory();

  const [logged, setLogged] = useState(false);

  useEffect(() => {
    if (!Boolean(sessionStorage.getItem("jwt")) && verifier(location.pathname).needLoggin) {
      history.push('/login');
    }
    setLogged(Boolean(sessionStorage.getItem("jwt")));
  }, [history, location.pathname]);

  function showHeader() {
    return !(
      location.pathname === '/login' ||
      location.pathname === '/register' ||
      location.pathname === '/reset_password' ||
      location.pathname.includes("/validate") ||
      location.pathname.includes("/recover")
    );
  }

  return (
    <>
      {showHeader() && (
        <Header logged={logged}/>
      )}
      {showHeader() && !isMobile && (
        <NavigationBar
          currentPath={location.pathname}
          routes={routes}
          logged={logged}
          sessionData={sessionData}
          isMobile={false}
        />
      )}
      <PageContainer>
        {children}
      </PageContainer>
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

export default AppStructure;

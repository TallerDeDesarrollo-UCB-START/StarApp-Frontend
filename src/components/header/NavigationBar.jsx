import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import EventNoteIcon from "@material-ui/icons/EventNote";
import PersonIcon from "@material-ui/icons/Person";
import GroupIcon from "@material-ui/icons/Group";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import useStyles from "./NavigationBar.styles";

const NavigationBar = ({ currentPath, logged, sessionData, isMobile }) => {
  const classes = useStyles();
  const history = useHistory();

  const getState = (currentPath) => {
    return ({
      "/": 0,
      "/projects/categories": 1,
      "/eventos": 2,
      "/cuenta": 3,
      "/users": 4
    }[currentPath]);
  };

  const [value, setValue] = useState(getState(currentPath));

  const { navContainer } = classes;
  return (
    <BottomNavigation
      className={navContainer}
      value={value}
      onChange={(event, newValue) => { setValue(newValue); }}
      showLabels={!isMobile}
    >
      <BottomNavigationAction
        icon={<HomeIcon />}
        label="Inicio"
        onClick={() => history.push("/")}
      />
      <BottomNavigationAction
        icon={<BusinessCenterIcon />}
        label="Proyectos"
        onClick={() => history.push(logged ? "/projects/categories" : "/login")}
      />
      <BottomNavigationAction
        icon={<EventNoteIcon />}
        label="Eventos"
        onClick={() => history.push(logged ? "/eventos" : "/login")}
      />
      <BottomNavigationAction
        icon={<PersonIcon />}
        label="Cuenta"
        onClick={() => history.push(logged ? "/cuenta" : "/login")}
      />
      {sessionData.role !== "voluntario" && (
        <BottomNavigationAction
          icon={<GroupIcon />}
          label="Usuarios"
          onClick={() => history.push(logged ? "/users" : "/login")}
        />
      )}
    </BottomNavigation>
  );
};

export default NavigationBar;

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from "@material-ui/core/Paper";
import DatosPersonales from "./DatosPersonales";
import ListaProyectos from "./perfil/proyectos/listaProyectos";

function TabPanel(props) {
  const { getDataProfile, handleOpenprop,children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  mytab: {
    marginLeft: "5%",
    marginRight: "3%",
  },
}));

export default function TabsProfile(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { getDataProfile, handleOpenprop } = props;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Paper className={classes.root} >
          <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" centered>
            <Tab className={classes.mytab} label="Datos Personales" {...a11yProps(0)} />
            <Tab className={classes.mytab} label="Mis Eventos" {...a11yProps(1)} />
            <Tab className={classes.mytab} label="Mis Proyectos" {...a11yProps(2)} />
          </Tabs>
        </Paper>
      </AppBar>
      
      <TabPanel  value={value} index={0} style={{background: "#AAB6C5"}}>
        <DatosPersonales 
        getDataProfile={getDataProfile}
        handleOpenprop={handleOpenprop}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ListaProyectos></ListaProyectos>
      </TabPanel>
    </div>
  );
}
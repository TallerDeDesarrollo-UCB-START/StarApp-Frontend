import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from "@material-ui/core/Paper";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

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
          <Typography>{children}</Typography>
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

export default function TabsProfile() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  /*
  return (
    <div>
      <Paper className={classes.root} style={{margin: "1px 9px 1px 1px"}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab className={classes.mytab} label="Datos Personales" />
          <Tab className={classes.mytab} label="Mis Eventos" />
          <Tab className={classes.mytab} label="Mis Proyectos" />
        </Tabs>
      </Paper>
    </div>
  );
}
  */

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Paper className={classes.root} style={{margin: "1px 9px 1px 1px"}}>
          <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" centered>
            <Tab className={classes.mytab} label="Datos Personales" {...a11yProps(0)} />
            <Tab className={classes.mytab} label="Mis Eventos" {...a11yProps(1)} />
            <Tab className={classes.mytab} label="Mis Proyectos" {...a11yProps(2)} />
          </Tabs>
        </Paper>
      </AppBar>
      <TabPanel  value={value} index={0}>
        Poner aqui componente con datos personales
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}
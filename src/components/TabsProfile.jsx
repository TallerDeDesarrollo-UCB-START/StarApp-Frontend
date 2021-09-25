import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    
  },
  mytab:{
    marginLeft: "5%",
    marginRight: "5%",
  },
});
export default function TabsProfile() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
    setValue(newValue);
    };
    return(
        <div>
        <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab  className={classes.mytab} label="Datos Personales" />
          <Tab  className={classes.mytab} label= "Mis Eventos" />
          <Tab  className={classes.mytab} label= "Mis Proyectos" />
        </Tabs>
      </Paper>
      </div>
    );
};


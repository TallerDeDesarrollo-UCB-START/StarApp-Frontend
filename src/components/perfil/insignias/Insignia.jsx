import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import React from "react";
import { makeStyles } from "@material-ui/core";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import SchoolIcon from '@material-ui/icons/School';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    height: 140,
    width: 250,
  },
}));

function Insignia({ insignias, insigniasOfUser }) {
  const classes = useStyles();

  return (
    <>
      {insignias.map((insignia, id) => {
        if (insigniasOfUser.insignias.includes(insignia.insignia)) {
          return (
            <Grid key={id} item>
              <Paper className={classes.paper}>
                <SchoolIcon />
                <Typography color="primary">{insignia.insignia}</Typography>
              </Paper>
            </Grid>
          );
        } else {
          return (
            <Grid key={id} item>
              <Paper className={classes.paper}>
                <EmojiEventsIcon />
                <Typography>{insignia.insignia}</Typography>
              </Paper>
            </Grid>
          );
        }
      })}
    </>
  );
}

export default Insignia;

import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import React from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import InsigniaImg from "../../../assets/images/badge.jpeg";
import InsigniaImg2 from "../../../assets/images/locked_badge.jpeg";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: 190,
    width: 130,
  },
}));

function Insignia({ insignias, insigniasOfUser }) {
  const classes = useStyles();

  return (
    <>
      {insignias.map((insignia, id) => {
        return (
          <Grid key={id} item>
            <Paper className={classes.paper}>
              {insigniasOfUser?.insignias?.includes(insignia?.insignia) ? (
                <img src={InsigniaImg} alt="Insignia" />
              ) : (
                <img src={InsigniaImg2} alt="Insignia2" />
              )}
              <Typography color="primary">{insignia.insignia}</Typography>
            </Paper>
          </Grid>
        );
      })}
    </>
  );
}

export default Insignia;

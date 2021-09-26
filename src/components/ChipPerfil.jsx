import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
      transform: "translate(-17vh, -10vh)",
    },
    marginLeft: "30vh",
    marginTop: "120px"
  },
}));

export default function ChipPerfil({ getDataProfile }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Chip label={getDataProfile.rol} color="secondary" />
    </div>
  );
}

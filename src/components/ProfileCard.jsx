import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {  Card} from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";


import TabsProfile from "./TabsProfile";
import { withRouter } from "react-router";


const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    alignItems: "center",
    direction: "row",
    backgroundColor: "#AAB6C5",
    margin: "3% 10% 5% 10%",
  },
  paper: {
    marginTop: 20,
  },
}));

const ProfileCard = (props) => {
  const classes = useStyles();
  const { getDataProfile, handleOpenprop } = props;
  return (
    <Card className={classes.root}>
      <CardContent>
        <TabsProfile 
          getDataProfile={getDataProfile}
          handleOpenprop={handleOpenprop}
         />
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};
export default withRouter(ProfileCard);


import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery, Card} from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";


import TabsProfile from "./TabsProfile";
import { withRouter } from "react-router";


const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    alignItems: "center",
    direction: "row",
    backgroundColor: "#F2F2F2",
    margin: "3% 10% 5% 10%",
  },
  rootSmallScreen: {
    justifyContent: "center",
    alignItems: "center",
    direction: "row",
  },
  paper: {
    marginTop: 20,
  },
}));

const ProfileCard = (props) => {
  const classes = useStyles();
  const smallScreen = !useMediaQuery("(min-width:811px)")
  const { getDataProfile, handleOpenprop } = props;
  if (smallScreen)
  {
    return (
      <Card className={smallScreen ? classes.rootSmallScreen: classes.root}>
          <TabsProfile 
            getDataProfile={getDataProfile}
            handleOpenprop={handleOpenprop}
          />
      </Card>
    );
  }else {
    return (
      <Card className={smallScreen ? classes.rootSmallScreen: classes.root}>
        <CardContent>
          <TabsProfile 
            getDataProfile={getDataProfile}
            handleOpenprop={handleOpenprop}
          />
        </CardContent>
      </Card>
    );
  }
};
export default withRouter(ProfileCard);


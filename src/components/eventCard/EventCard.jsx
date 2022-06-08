import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import useStyles from "./EventCard.styles";
import event_picture from "../../assets/images/event_picture.png";

const months = {
  1: "Ene",
  2: "Feb",
  3: "Mar",
  4: "Abr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Ago",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dic",
};

const EventCard = ({ event }) => {
  const classes = useStyles();

  function getEventDateString(date) {
    const splittedDate = date.split("-");
    return months[parseInt(splittedDate[1])] + " " + splittedDate[2];
  }

  const { id, fecha_evento, hora_inicio, hora_fin, nombre_evento, lugar_evento } = event;
  const { card_container, card_content, left_card_content, right_card_content, icon_and_text } = classes;
  return (
    <Card className={card_container} onClick={() => (window.location.href = `/eventos/${id}`)}>
      <CardMedia
        component="img"
        height="180"
        src={event_picture}
      />
      <CardContent className={card_content}>
        <div className={left_card_content}>
          <Typography variant="h6">
            {getEventDateString(fecha_evento)}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            {hora_inicio}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            &nbsp;&nbsp;&nbsp;&nbsp;a
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            {hora_fin}
          </Typography>
        </div>
        <div className={right_card_content}>
          <Typography variant="h6">
            {nombre_evento}
          </Typography>
          <Typography className={icon_and_text} variant="body2" color="textSecondary" component="div">
            <LocationOnIcon fontSize="small"/>
            {lugar_evento}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;

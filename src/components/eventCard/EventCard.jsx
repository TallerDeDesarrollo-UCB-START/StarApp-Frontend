import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MyButton from "../button";
import useStyles from "./EventCard.styles";
import { formatTime, formatDateWith } from "../../utils/DateTime.util";
import event_picture from "../../assets/images/event_picture.png";

const EventCard = ({ event, hasActions, onClick }) => {
  const classes = useStyles();

  const { id, fecha_evento, hora_inicio, hora_fin, nombre_evento, lugar_evento, isParticipating } = event;
  const { card_container, card_media, card_content, left_card_content, right_card_content, icon_and_text } = classes;
  return (
    <Card className={card_container}>
      <CardMedia
        className={card_media}
        component="img"
        height="180"
        src={event_picture}
        onClick={() => (window.location.href = `/eventos/${id}`)}
      />
      <CardContent className={card_content}>
        <div className={left_card_content}>
          <Typography variant="h6">
            {formatDateWith(fecha_evento, "MMM dd")}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            {formatTime(hora_inicio)}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            &nbsp;&nbsp;&nbsp;&nbsp;a
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            {formatTime(hora_fin)}
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
          {hasActions && (
            <>
              {isParticipating ? (
                <MyButton className="leave" onClick={onClick}>
                  Dejar de participar
                </MyButton>
              ) : (
                <MyButton className="default" onClick={onClick}>
                  Participar
                </MyButton>
              )}
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;

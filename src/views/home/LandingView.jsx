import React from 'react';
import { Typography, Card, CardMedia, CardActions, CardContent, Link } from '@material-ui/core';
import MyButton from '../../components/button';
import event_picture from "../../assets/images/event_picture.png";
import useStyles from "./LandingView.styles";

const LandingView = () => {
	const classes = useStyles();
	const { card_container, card_content, card_content_text, card_actions } = classes;

	function redirectTo(path) {
		window.location.href = path;
	}

	return (
		<Card className={card_container}>
		<CardMedia component="img" height="100%" src={event_picture}/>
			<CardContent className={card_content}>
				<Typography className={card_content_text}>
					Una experiencia personalizada de volutariado para impulsar líderes de impacto positivo.
					Explora causas y descubre la tuya, obtén un récord de tu participación activa, y acumula 
					horas y experiencias de voluntariado.
				</Typography>
			</CardContent>
			<CardActions className={card_actions}>
				<MyButton className="default" onClick={() => redirectTo("/register")}>
					Únete a Start
				</MyButton>
				<Link component="button" underline="always" variant="body2" onClick={() => redirectTo("/projects/categories")}>
					Explora nuestros proyectos
				</Link>
			</CardActions>
		</Card>
	)
}

export default LandingView

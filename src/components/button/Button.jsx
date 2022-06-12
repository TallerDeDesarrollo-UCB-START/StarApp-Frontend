import * as React from "react";
import { useMediaQuery } from "@material-ui/core";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function MyButton({children, onClick, className, disabled, variant}) {
	const isMobile = !useMediaQuery('(min-width:900px)');
	const size = isMobile ? "small" : "medium";
  return (
		<>
			{(className === "default") && (
				<Button
					onClick={onClick}
					variant="contained"
					color="primary"
					size={size}
					disabled={disabled}
				>
					{children}
				</Button>
			)}
			{(className === "go-back") && (
				<Button
					onClick={onClick}
					style={{backgroundColor: "transparent", fontWeight: "bold"}}
					size={size}
					color="primary"
					disabled={disabled}
				>
					<FontAwesomeIcon size="lg" icon={faArrowCircleLeft}/>&nbsp;Atras
				</Button>
			)}
			{(className === "excel") && (
				<Button
					onClick={onClick}
					style={{backgroundColor: "transparent", color: "green"}}
					size={size}
					disabled={disabled}
				>
					<FontAwesomeIcon size="lg" icon={faDownload}/>
				</Button>
			)}
			{(className === "edit") && (
				<Button
					onClick={onClick}
					style={{backgroundColor: "transparent", color: "black"}}
					size={size}
					disabled={disabled}
				>
					<FontAwesomeIcon size="lg" icon={faEdit}/>
				</Button>
			)}
			{/*Eventualmente va a desaparecer see-details*/}
			{(className === "see-details") && (
				<Button
					onClick={onClick}
					style={{backgroundColor: "green", color: "white"}}
					size={size}
					disabled={disabled}
				>
					{children}
				</Button>
			)}
			{(className === "leave") && (
				<Button
					onClick={onClick}
					variant="contained"
					style={{backgroundColor: "black", color: "white"}}
					size={size}
					disabled={disabled}
				>
					{children}
				</Button>
			)}
			{(className === "delete") && (
				<Button
					onClick={onClick}
					variant="contained"
					style={{backgroundColor: "red", color: "white"}}
					size={size}
					disabled={disabled}
				>
					{children} 
				</Button>
			)}
			{(className === "delete-icon") && (
				<Button
					onClick={onClick}
					style={{backgroundColor: "transparent", color: "red"}}
					size={size}
					disabled={disabled}
				>
					<FontAwesomeIcon size="lg" icon={faTrash}/> 
				</Button>
			)}
			{(className === "cancel") && (
				<Button
					onClick={onClick}
					variant="contained"
					style={{background: "gray"}}
					size={size}
					disabled={disabled}
				>
					{children}
				</Button>
			)}
			{(className === "filter") && (
				<Button
					onClick={onClick}
					color="secondary"
					variant={variant}
					size={size}
					disabled={disabled}
				>
					{children}
				</Button>
			)}

			{(className === "cancel-icon") && (
				<Button
					onClick={onClick}
					style={{background: "transparent", color: "black"}}
					size={size}
					disabled={disabled}
				>
					<FontAwesomeIcon className="cancel-icon" icon={faTimes}/>
				</Button>
			)}
		</>
  );
}

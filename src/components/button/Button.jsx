import * as React from "react";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function MyButton({children, onClick, className, disabled}) {
  return (
		<>
			{(className === "default") && (
				<Button
					onClick={onClick}
					variant="contained"
					color="primary"
					size="medium"
					disabled={disabled}
				>
					{children}
				</Button>
			)}
			{(className === "go-back") && (
				<Button
					onClick={onClick}
					style={{backgroundColor: "transparent", fontWeight: "bold"}}
					size="large"
					color="primary"
					disabled={disabled}
				>
					<FontAwesomeIcon size="lg" icon={faArrowCircleLeft}/>&nbsp;Atras
				</Button>
			)}
			{(className === "excel") && (
				<Button
					onClick={onClick}
					style={{backgroundColor: "green", color: "white"}}
					disabled={disabled}
				>
					{children}&nbsp;&nbsp;<FontAwesomeIcon size="lg" icon={faDownload}/>
				</Button>
			)}
			{(className === "edit") && (
				<Button
					onClick={onClick}
					style={{backgroundColor: "transparent", color: "black"}}
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
					disabled={disabled}
				>
					{children}
				</Button>
			)}
			{(className === "leave") && (
				<Button
					onClick={onClick}
					style={{backgroundColor: "black", color: "white"}}
					disabled={disabled}
				>
					{children}
				</Button>
			)}
			{(className === "delete") && (
				<Button
					onClick={onClick}
					style={{backgroundColor: "red", color: "white"}}
					disabled={disabled}
				>
					{children}&nbsp;&nbsp;<FontAwesomeIcon size="lg" icon={faTrash}/> 
				</Button>
			)}
			{(className === "cancel") && (
				<Button
					onClick={onClick}
					variant="contained"
					style={{background: "gray"}}
					disabled={disabled}
				>
					{children}
				</Button>
			)}

			{(className === "cancel-icon") && (
				<Button
					onClick={onClick}
					style={{background: "transparent", color: "black"}}
					disabled={disabled}
				>
					<FontAwesomeIcon className="cancel-icon" icon={faTimes}/>
				</Button>
			)}
		</>
  );
}

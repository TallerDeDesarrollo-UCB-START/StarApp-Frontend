import * as React from 'react';
import Button from '@mui/material/Button';

export default function MyButton({children, onClick, className}) {
	
  return (
		<>
			{(className === "create") && (
				<Button
					onClick={onClick}
					variant="contained"
					style={{background: 'blue'}}
				>
					{children}
				</Button>
			)}
			{(className === "cancel") && (
				<Button
					onClick={onClick}
					variant="contained"
					style={{background: 'gray'}}
				>
					{children}
				</Button>
			)}
			{(className === "edit") && (
				<Button
					onClick={onClick}
					style={{background: 'black'}}
				>
					{children}
				</Button>
			)}
			{(className === "delete") && (
				<Button
					onClick={onClick}
					style={{background: 'red'}}
				>
					{children}
				</Button>
			)}
			{(className === "rename2") && (
				<Button
					onClick={onClick}
					style={{background: 'green', color: 'white'}}
				>
					{children}
				</Button>
			)}
			{(className === "go-back") && (
				<Button
					onClick={onClick}
					style={{background: 'brown', color: 'white'}}
				>
					{children}
				</Button>
			)}
		</>
  );
}

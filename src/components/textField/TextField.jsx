import * as React from "react";
import TextField from "@mui/material/TextField";

const MyTextField = ({ label, name, value, onChange, placeholder, multilineRows }) => {
	let isMultiline = false;
	if (multilineRows) {
		isMultiline = true;
	}
	return (
		<>
			<TextField
				label={label}
				name={name}
				type="text"
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				multiline={isMultiline}
				rows={multilineRows}
				size="small"
			/>
		</>
	);
}

export default MyTextField;

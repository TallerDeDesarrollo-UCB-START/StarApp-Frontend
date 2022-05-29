import * as React from "react";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function MySelect({id, name, placeholder, value, onChange, children}) {
  return (
		<>
			<FormControl size="small">
        <InputLabel id={id}>{placeholder}</InputLabel>
        <Select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        >
          {children}
        </Select>
      </FormControl>
		</>
  );
}

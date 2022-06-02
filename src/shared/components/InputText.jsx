import * as React from "react";
import TextField from "@mui/material/TextField";

export default function MyInputText({label, name, className, value, onChange, placeholder=""}) {
    return (
        <>
        <TextField
              label={label}
              name={name}
              className={className}
              type="text"
              value={value}
              onChange={onChange}
              placeholder={placeholder}
        />
        </>
    );
}

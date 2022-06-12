import React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const MyTimePicker = ({ value, onChange, label }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>     
      <TimePicker
        label={label}
        value={value}
        onChange={onChange}
        renderInput={(params) => <TextField {...params} />}
        size="small"
      /> 
    </LocalizationProvider>
  );
}

export default MyTimePicker;

import React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const MyTimePicker = ({ label, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>     
        <TimePicker
            label={label}
            value={time}
            onChange={onChange}
            renderInput={(params) => <TextField {...params} />}
        /> 
    </LocalizationProvider>
  );
}

export default MyTimePicker;

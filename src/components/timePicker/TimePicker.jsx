import React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const MyTimePicker = ({ label, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>     
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

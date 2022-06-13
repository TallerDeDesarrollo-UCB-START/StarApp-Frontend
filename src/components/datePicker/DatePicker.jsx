import React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { getDateFormat } from '../../utils/DateTime.util';


const MyDatePicker = ({ value, onChange, label }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <DesktopDatePicker
        label={label}
        value={value}
        inputFormat={getDateFormat()}
        onChange={onChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

export default MyDatePicker;

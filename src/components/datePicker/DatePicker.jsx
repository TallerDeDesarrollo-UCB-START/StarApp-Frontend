import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';


export default function MyDatePicker({value, onChange, label}) {

    return (
      <LocalizationProvider dateAdapter={AdapterLuxon}>
        <DesktopDatePicker
          label={label}
          value={value}
          // inputFormat="DD/MM/YYYY"
          onChange={onChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    );
  }
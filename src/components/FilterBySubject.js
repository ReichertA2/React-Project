import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Subject" />}
    />
  );
}


const top100Films = [
  { label: 'self-sufficiency'},
  { label: 'Courage and Bravery'},
  { label: 'death'},
  
];

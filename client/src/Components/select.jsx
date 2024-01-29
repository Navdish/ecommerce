import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectVariants({role, setRole}) {
  

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={role}
          onChange={handleChange}
          label="Role"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'user'}>User</MenuItem>
          <MenuItem value={'admin'}>Admin</MenuItem>
        </Select>
      </FormControl>
      
    </div>
  );
}
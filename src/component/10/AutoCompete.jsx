import { Autocomplete, TextField } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

function AutoCompete() {
    const skills = ['HTML', 'CSS', 'JS', 'REACT', 'PHP', 'LARAVEL'];
    const [value , setValue] =useState();

  return (
    <div>
      <h1>{value}</h1>
        <Stack spacing={2} width='400px'>
           <Autocomplete options={skills} renderInput={(params) =>
         <TextField 
           {...params} label='skills'
           value={value} onChange={(e) => setValue(e.target.value)}
         /> } />

        </Stack>
    </div>
  )
}

export default AutoCompete
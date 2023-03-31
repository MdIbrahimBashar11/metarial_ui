import { Box, MenuItem, TextField  } from '@mui/material'

import React from 'react'
import Switchs from './10/Switch'

function Selecet() {
  return (
    <>
     <Box width='250px'>
        <TextField label="Select Country"  select fullWidth>
            <MenuItem value='bn'> Bangladesh</MenuItem>
            <MenuItem value='in'>India</MenuItem>
            <MenuItem value='us'>Austraia</MenuItem>
        </TextField>
    </Box>
    <Switchs/>
    </>
  )
}

export default Selecet
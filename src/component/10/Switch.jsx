import { Box, FormControlLabel , Switch } from '@mui/material'
import React, { useState } from 'react'
import Ratings from './Rating'

function Switchs() {
   
  return (
  <>
   <Box>
      <FormControlLabel label='Dark mode'
       control={<Switch
        />}>
         
      </FormControlLabel>
   </Box>
   <Ratings/>
  </>
  )
}

export default Switchs
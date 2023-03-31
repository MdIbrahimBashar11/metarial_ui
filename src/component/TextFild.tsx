import React, { useState } from 'react'
import {Stack, TextField , InputAdornment} from '@mui/material';
function TextFild() {
  const [value , setvalue] = useState('');
  return (
    <div>
          <Stack spacing={4}>
             <Stack direction={'row'} spacing={2}>
                 <TextField label='Name' variant='outlined' />
                 <TextField label='Email' variant='standard' />
                 <TextField label='Email' variant='filled' />
                 <TextField label='Passord' variant='standard' color='success' />
             </Stack>
             <Stack direction={'row'} spacing={2}>
                  <TextField label='Form Input'
                  helperText='Do Not share your Password.'
                  type='password'
                   required/>
                   <TextField label='Form Input'
                  helperText='Do Not share your Password.'
                  type='password'
                   required/>
             </Stack>
             <Stack direction={'row'} spacing={2}>
                      <TextField 
                      required
                      value={value}
                      onChange={(e) => setvalue(e.target.value)}
            
                      helperText={
                        !value ? "Required" : "Don Not Share Password"
                      }
                      label='Name' 
                      InputProps={{
                        startAdornment : <InputAdornment position='start'>$</InputAdornment>,
                      }}
                      />
             </Stack>
          </Stack>
    </div>
  )
}

export default TextFild
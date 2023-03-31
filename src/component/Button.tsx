import React from 'react'
import {Stack, Button} from '@mui/material';
import { SendTimeExtension } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import ButtonGroup from '@mui/material/ButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';



function Buttons() {
  return (
   <Stack spacing={4}>
     <Stack spacing={4} direction='row'>
        <Button variant='text'>Text</Button>
        <Button variant='outlined'>Outlined</Button>
        <Button variant='contained'>Contained</Button>
    </Stack>
    <Stack spacing={2} direction="row">
        <Button variant='contained' color='primary'>Text</Button>
        <Button variant='contained' color='info'>Outlined</Button>
        <Button variant='contained' color='error'>Contained</Button>
        <Button variant='contained' color='secondary'>Text</Button>
        <Button variant='contained' color='warning'>Outlined</Button>
        
    </Stack>
    <hr />
    <Stack display={'block'} spacing={2} direction="row">
        
        <Button size='small' variant='contained' color='error'>Contained</Button>
        <Button size='medium' variant='contained' color='warning'>Outlined</Button>
        <Button size='large' variant='contained' color='secondary'>Text</Button>
        
    </Stack>
    <Stack spacing={2} direction='row'>

         <Button variant='outlined' startIcon={ <SendTimeExtension/>}>
            Send
         </Button>
             <Button variant='outlined' endIcon={ <SendTimeExtension/>}>
            Send
         </Button>
         <IconButton aria-label='send'>
           
         </IconButton>
    </Stack>
    <Stack direction={'row'}>
      <ButtonGroup variant='contained' orientation='vertical' color='success'>
        <Button >Left</Button>
        <Button >Center</Button>
        <Button>Right</Button>
        </ButtonGroup>
    </Stack>
   </Stack>
  )
}

export default Buttons
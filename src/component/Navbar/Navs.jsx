import { CatchingPokemon, NavigateNext } from '@mui/icons-material'
import { AppBar, Breadcrumbs, Button, Drawer, IconButton, Link, Toolbar, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useState } from 'react'
import Speed from './Speed';

function Navs() {
    const [open , setOpen] = useState(false);
  return (
 <>
  <IconButton
   size='large'
   color='inherit'
   edge='start'
   aria-label='logo'
   onClick={() => setOpen(true)}
  >dgsh</IconButton>
  <Box>
  <Stack>
  <AppBar position='static'>
       <Toolbar >
             <IconButton size='large' edge='start' color='inherit'
             aria-label='logo' >
                <CatchingPokemon/>
             </IconButton>
   
       <Typography variant='h5' component='div' sx={{flexGrow:1}}>
           IBRAHIM
       </Typography>
       <Stack direction='row' spacing={2}>
        <Button color='inherit'>Home</Button>
        <Button color='inherit'>About</Button>
        <Button color='inherit'>Products</Button>
        <Button color='inherit'>Contact</Button>

       </Stack>
       </Toolbar>
   </AppBar>
      <Link href='/box'>Link</Link>
  </Stack>
     <Breadcrumbs aria-label='breadcrumbs'
     separator={<NavigateNext size='small' />}
     maxItems={3}
     >
         <Link underline='hover' href='/'>Home</Link>
         <Link underline='hover' href='/box'>Box</Link>
         <Link underline='hover' href='/nav'>Navbar</Link>
         <Link underline='hover' href='/nav'>Navbar</Link>
         <Link underline='hover' href='/nav'>Navbar</Link>
     </Breadcrumbs>
  </Box>
  <Drawer anchor='left' open={open}
   onClose={() => setOpen(false)}
  >
    <Box p={2} width='250px'>
    <Typography varient='h4'>Hello</Typography>

    </Box>
  </Drawer>
  <hr />
  <Speed/>
 </>
  )
}

export default Navs
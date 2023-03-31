import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import Accordians from './Accordian'


function Boxs() {
  return (
<>
 <Accordians/>
<hr />
<Paper sx={{padding: '20px'}} elevation={6}>
   <Stack sx={{border: '1px solid'}} direction='row' spacing={2}
     divider={<Divider orientation='vertical' flexItem />} >
     <Box  className="fmksg"
     sx={{
        backgroundColor: 'black',
        color: 'white',
        height: '100px',
        width: '100px',
        transition: '.3s',
        textAlign: 'center',
        padding: '20px',
        '&:hover': {
            backgroundColor: '#fff',
            color: '#111'
        }
     }}>
        fldghf
     </Box>
     <Box  className="fmksg"
     sx={{
        backgroundColor: 'green',
        color: 'white',
        height: '100px',
        width: '100px',
        transition: '.3s',
        textAlign: 'center',
        padding: '20px',
        '&:hover': {
            backgroundColor: '#fff',
            color: '#111'
        }
     }}>
        fldghf
     </Box>
   </Stack>
   <Grid rowSpacing={2}  columnSpacing={1}   my={2}>

        <Grid backgroundColor={'green'} p={3} item md={6} xs={6} sm={12}>dh</Grid>       
        <Grid backgroundColor={'green'} p={3} item md={6} xs={6} sm={12}>dh</Grid>      
        <Grid backgroundColor={'green'} p={3} item md={6} xs={6} sm={12}>dh</Grid>      
        <Grid backgroundColor={'green'} p={3} item md={6} xs={6} sm={12}>dh</Grid>   
   </Grid>
   <Card my={4}>
    <CardMedia
      component='img'
      image='./'
    />
       <CardContent>
         <Typography variant='h5' gutterBottom component='div'>
            React
         </Typography>
         <Typography variant='p' gutterBottom component='div'>
           Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Doloremque harum minima magnam obcaecati
            necessitatibus placeat fugiat sunt, eligendi voluptatibus ea.
         </Typography>
       </CardContent>
       <CardActions>
          <Button size='small'>Share</Button>
          <Button size='small'>Learn more.</Button>
       </CardActions>
   </Card>
 </Paper>
</>
  )
}

export default Boxs
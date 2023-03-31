import {  ExpandCircleDown, ExpandLess } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from '@mui/material'
import React from 'react'

function Accordians() {
  return (
    <div>
        <Grid >

           <Accordion>
                <AccordionSummary
                id='panel-header' 
                aria-controls='panel1-control'
                expandIcon={<ExpandCircleDown />}
                >
                 <Typography variant='h5'>Typogrphy 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa eos aliquid facilis beatae voluptates asperiores 
                quaerat provident nesciunt quae nulla hic non, enim 
                amet odio rem necessitatibus ipsam temporibus explicabo!
                </AccordionDetails>
           </Accordion>
           
           <Accordion>
                <AccordionSummary
                id='panel-header' 
                aria-controls='panel1-control'
                expandIcon={<ExpandLess />}
                >
                 <Typography variant='h5'>Typogrphy 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Culpa eos aliquid facilis beatae voluptates asperiores 
                quaerat provident nesciunt quae nulla hic non, enim 
                amet odio rem necessitatibus ipsam temporibus explicabo!
                </AccordionDetails>
           </Accordion>
        </Grid>
    </div>
  )
}

export default Accordians
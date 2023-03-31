import { CopyAll, Print, PrintDisabled, Share } from '@mui/icons-material'
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import React from 'react'

function Speed() {
  return (
    <div>
        <SpeedDial ariaLabel='Navigation speed dail'
          sx={{position: 'absolute' , bottom: 16 , right:17}}
          icon={<SpeedDialIcon/>}
        >
           <SpeedDialAction icon={<CopyAll />} tooltipTitle='Copy' />
           <SpeedDialAction icon={<Print />} tooltipTitle='Print' />
           <SpeedDialAction icon={<Share />} tooltipTitle='Share' />

        </SpeedDial>
    </div>
  )
}

export default Speed
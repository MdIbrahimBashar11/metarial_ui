import { Favorite } from '@mui/icons-material'
import { Rating } from '@mui/material'
import { Stack } from '@mui/system'
import AutoCompete from './AutoCompete'



function Ratings() {
    
  return (
    <div><hr />
        <Stack spacing={1}>
            <Rating 
            icon={<Favorite fontSize='inherit' color='success' />}
            precision={0.5} />
               <Rating 
               value={3}
            icon={<Favorite fontSize='inherit' color='success' />}
            precision={0.5}
            readOnly />
        </Stack>
        <hr />
        <AutoCompete/>
    </div>
  )
}

export default Ratings
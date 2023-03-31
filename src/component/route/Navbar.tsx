import React from 'react'
import { Link , Outlet } from 'react-router-dom'
import { Button} from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';

function Navbar() {
  return (
    <div>
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-3">
            <nav>
              <ButtonGroup variant='contained' >
                 <Link to='/'>
                    <Button variant='contained' >Button</Button>
                 </Link>
                 <Link to='/typographys'>
                    <Button variant='contained'>Typo</Button>
                 </Link>
                 <Link to='/textfilds'>
                    <Button variant='contained'>TextFild</Button>
                 </Link>
                 <Link to='/select'>
                    <Button variant='contained'>Select</Button>
                 </Link>
                 <Link to='/box'>
                    <Button variant='contained'>Layout</Button>
                 </Link>
                  <Link to='/nav'>
                    <Button variant='contained'>Navbar</Button>
                 </Link>
                 <Link to='/date'>
                    <Button variant='contained'>Date|LI</Button>
                 </Link>
                 </ButtonGroup>
             </nav>
            </div>
             <div className="col-md-9">
             <Outlet/>
             </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar
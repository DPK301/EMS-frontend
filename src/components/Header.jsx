import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
function Header() {
  return (
    <div>
        <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand tag="span" className='mb-0 h1'><b>EMS</b></MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header
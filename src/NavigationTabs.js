import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'

function NavigationTabs() {
  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-auto" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavDropdown className="mx-auto" title="Length" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Meter [m] to Mile [mi]</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Millimeter [mm] to Inch [in]</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Inch [in] to Feet [ft]</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="mx-auto" title="Mass" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Kilogram [kg] to Pound [lb]</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="mx-auto" title="Force" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Newton [N] to Pound Force [lbf]</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Kilonewton [kN] to Pound Force [lbf]</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavigationTabs
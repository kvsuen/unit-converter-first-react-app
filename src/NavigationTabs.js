import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'

function NavigationTabs(props) {
  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-auto" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavDropdown className="mx-auto" title="Length" id="basic-nav-dropdown">
              <NavDropdown.Item name="meter [m] mile [mi]" onClick={props.handleClick}>Meter [m] to Mile [mi]</NavDropdown.Item>
              <NavDropdown.Item name="millimeter [mm] inch [in]" onClick={props.handleClick}>Millimeter [mm] to Inch [in]</NavDropdown.Item>
              <NavDropdown.Item name="inch [in] feet [ft]" onClick={props.handleClick}>Inch [in] to Feet [ft]</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="mx-auto" title="Mass" id="basic-nav-dropdown">
              <NavDropdown.Item name="kilogram [kg] pound [lb]" onClick={props.handleClick}>Kilogram [kg] to Pound [lb]</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="mx-auto" title="Force" id="basic-nav-dropdown">
              <NavDropdown.Item name="newton [N] pound Force [lbf]" onClick={props.handleClick}>Newton [N] to Pound Force [lbf]</NavDropdown.Item>
              <NavDropdown.Item name="kilonewton [kN] pound Force [lbf]" onClick={props.handleClick}>Kilonewton [kN] to Pound Force [lbf]</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavigationTabs
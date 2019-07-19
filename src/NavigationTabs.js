import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'

function NavigationTabs(props) {
  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="md">
        <Navbar.Brand>Unit Converter</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavDropdown className="mx-auto" title="Length" id="basic-nav-dropdown">
              <NavDropdown.Item name="meter [m] mile [mi]" onClick={props.handleClick}>Meter [m] to Mile [mi]</NavDropdown.Item>
              <NavDropdown.Item name="millimeter [mm] inch [in]" onClick={props.handleClick}>Millimeter [mm] to Inch [in]</NavDropdown.Item>
              <NavDropdown.Item name="inch [in] feet [ft]" onClick={props.handleClick}>Inch [in] to Feet [ft]</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="mx-auto" title="Mass" id="basic-nav-dropdown">
              <NavDropdown.Item name="kilogram [kg] pound [lb]" onClick={props.handleClick}>Kilogram [kg] to Pound [lb]</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="mx-auto" title="Force" id="basic-nav-dropdown">
              <NavDropdown.Item name="newton [N] pound-force [lbf]" onClick={props.handleClick}>Newton [N] to Pound Force [lbf]</NavDropdown.Item>
              <NavDropdown.Item name="kilonewton [kN] pound-force [lbf]" onClick={props.handleClick}>Kilonewton [kN] to Pound Force [lbf]</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="mx-auto" title="Temperature" id="basic-nav-dropdown">
              <NavDropdown.Item name="celcius [&deg;C] fahrenheit [&deg;F]" onClick={props.handleClick}>Celcius [&deg;C] to Fahrenheit [&deg;F]</NavDropdown.Item>
              <NavDropdown.Item name="fahrenheit [&deg;F] celcius [&deg;C]" onClick={props.handleClick}>Fahrenheit [&deg;F] to Celcius [&deg;C]</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavigationTabs
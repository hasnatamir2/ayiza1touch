import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { useNavigate, Link } from 'react-router-dom'
import AyizaLogo from '../../assets/images/Ayiza-Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const NavbarMain = (props: any) => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
      <Navbar.Brand>
        <Link to="/">
          <img src={AyizaLogo} alt="Ayiza Logo" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
        <Nav className="" navbarScroll>
          <Nav.Link>
            <Link to="/companyCode">Add Company</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarMain;


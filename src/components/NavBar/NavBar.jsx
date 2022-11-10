import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';



export const NavBar= () => {
    return (
                  <Navbar collapseOnSelect expand="lg"  variant="dark">
                  <Navbar.Brand>
                    -Fc-
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                      <NavLink to='/'className="nav--links animate__animated animate__backInLeft">Inicio</NavLink>
                      <NavLink to='/Proyectos' className="nav--links animate__animated animate__backInRight">Proyectos</NavLink>
                      <NavLink to='/Contacto' className="nav--links animate__animated animate__backInLeft">Contacto</NavLink>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>      
    );
  }


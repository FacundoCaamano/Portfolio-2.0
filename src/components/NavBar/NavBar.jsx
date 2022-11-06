import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';




export const NavBar= () => {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
          <NavLink to='/'>Inicio</NavLink>
            <NavLink to='/Proyectos' >Proyectos</NavLink>
            <NavLink to='/Contacto' >Contacto</NavLink>
          </Nav>
        </Container>
      </Navbar>
    );
  }


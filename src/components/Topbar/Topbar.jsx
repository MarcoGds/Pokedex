import React from "react";
import { NavLink } from 'react-router-dom';

import { Navbar, Container } from 'react-bootstrap';

import pokemonLogo from './pokemon-logo-8.png';

import './Topbar.scss'

export default function Topbar() {

  return (
    <React.Fragment>
      <Navbar>
        <Container>
          <NavLink to="/">
            <img
              alt=""
              src={pokemonLogo}
              width="160"
              height="60"
              className="d-inline-block align-top"
            />
          </NavLink>
        </Container>
        <Container className="navLinks">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/statuspage'>Pokémons</NavLink>
          <NavLink to='#contact'>Contato</NavLink>
        </Container>
      </Navbar>
      <hr
        style={{
          color: '#DCE0E5',
          backgroundColor: '#DCE0E5',
          height: .5,
          borderColor: '#DCE0E5',
        }}
      />
    </React.Fragment>
  )
}
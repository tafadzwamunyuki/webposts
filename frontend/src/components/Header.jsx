import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../index.css"

const Header = () => {
  return (
    <Navbar expand="lg" bg="info" collapseOnSelect sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="/freelog.logo.jpeg"
            alt=""
            className="logo"
          />
          <span className="ms-2 fw-bold text-light"></span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto text-center">
          <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname.startsWith('/blogs') ? 'active' : ''}`} to="/blogs">Articles</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/create' ? 'active' : ''}`} to="/create">Add Article</Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

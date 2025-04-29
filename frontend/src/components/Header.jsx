import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import "../index.css";

const Header = () => {
  const location = useLocation();

  const handleNavClick = () => {
    const menuToggle = document.querySelector('.navbar-collapse');
    if (menuToggle && menuToggle.classList.contains('show')) {
      menuToggle.classList.remove('show');
    }
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark" collapseOnSelect sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="/freelog.logo.jpeg"
            alt="FreeLog Logo"
            className="logo"
          />
          <span className="ms-2 fw-bold text-light">FreeLog</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto text-center">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active-text' : ''}`} onClick={handleNavClick}>
              Home
            </Link>
            <Link to="/blogs" className={`nav-link ${location.pathname.startsWith('/blogs') ? 'active-text' : ''}`} onClick={handleNavClick}>
              Articles
            </Link>
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active-text' : ''}`} onClick={handleNavClick}>
              About
            </Link>
            <Link to="/create" className={`nav-link ${location.pathname === '/create' ? 'active-text' : ''}`} onClick={handleNavClick}>
              Add Article
            </Link>
            <a
              href="https://www.buymeacoffee.com/tafadzwamunyuki"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              onClick={handleNavClick}
            >
              <Button variant="light" className="ms-2">
                ☕ Buy Me a Coffee
              </Button>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import AuthNav from './auth-nav';
import logo from "../assets/logo.svg";

const MainNav = () => (
  <Nav className="mr-auto">
    <Nav.Link
      as={RouterNavLink}
      to="/"
      exact
      activeClassName="router-link-exact-active"
    >
      Home
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/profile"
      exact
      activeClassName="router-link-exact-active"
    >
      Profile
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/search"
      exact
      activeClassName="router-link-exact-active"
    >
      Search
    </Nav.Link>
  </Nav>
);


const NavBar = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container>

        <MainNav />
        <AuthNav />
      </Container>
    </Navbar>
  );
};

export default NavBar;

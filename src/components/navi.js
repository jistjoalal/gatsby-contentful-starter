import React from "react";
import { Link } from "gatsby";

import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";

export default class Navi extends React.Component {
  render() {
    const { siteTitle, ...rest } = this.props;
    return (
      <Nav className="container" {...rest}>
        <NavDropdown title={`Dropdown`}>
          <NavDropdown.Item as={Link} to="/">
            Home
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/blog/">
            Blog
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/blog/">
          Blog
        </Nav.Link>
      </Nav>
    );
  }
}

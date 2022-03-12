import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Navbar, Nav, NavItem, Container } from "react-bootstrap"

const Header = ({ siteTitle }) => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          {siteTitle}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-bavbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="basic-bavbar-nav">
          <Nav className="ms-auto">
            <Nav.Item href="/about">
              <Nav.Link as={Link} activeClassName="active" to="/about">
                会社概要
              </Nav.Link>
            </Nav.Item>
            <NavItem href="/about">
              <Nav.Link as={Link} activeClassName="active" to="/jigyo">
                事業内容
              </Nav.Link>
            </NavItem>
            <NavItem href="/about">
              <Nav.Link as={Link} activeClassName="active" to="/information">
                インフォメーション
              </Nav.Link>
            </NavItem>
            <NavItem href="/about">
              <Nav.Link as={Link} activeClassName="active" to="/contact">
                お問い合わせ
              </Nav.Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

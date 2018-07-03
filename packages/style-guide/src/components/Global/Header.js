import { Link } from 'react-router-dom'
import React, { PureComponent } from 'react'

import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, ThemeSelector } from '@myorg/components'

class Header extends PureComponent {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  }

  render() {
    return (
      <header>
        <Navbar color="dark" dark={true} fixed="top" expand="md">
          <NavbarBrand tag={Link} to="/">
            Style Guide
          </NavbarBrand>
          <NavbarToggler onClick={() => this.toggle()} />
          <Collapse isOpen={this.state.isOpen} navbar timeout={0}>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <ThemeSelector />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    )
  }
}

export default Header

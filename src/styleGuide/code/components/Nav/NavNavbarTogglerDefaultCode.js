const NavNavbarTogglerDefaultCode = `import React, { PureComponent } from 'react'

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'components/Common'

class NavNavbarTogglerDefault extends PureComponent {
  state = {
    collapsed: true
  }

  toggleNavbar() {
    this.setState(prevState => ({
      collapsed: !prevState.collapsed
    }))
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">
            reactstrap
          </NavbarBrand>
          <NavbarToggler onClick={() => this.toggleNavbar()} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar timeout={0}>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default NavNavbarTogglerDefault
`

export default NavNavbarTogglerDefaultCode

import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import {
  Collapse,
  GlobalContainerContext,
  LanguageSelector,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  ThemeSelector
} from '@myorg/components-common'

class Header extends PureComponent {
  state = {
    isOpen: false
  }

  static propTypes = {
    strings: PropTypes.object.isRequired
  }

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  }

  render() {
    return (
      <GlobalContainerContext.Consumer>
        {context => (
          <header>
            <Navbar color="dark" dark={true} fixed="top" expand="md">
              <NavbarBrand tag={Link} to={this.props.strings.routes.home.path}>
                {this.props.strings.routes.home.displayName}
              </NavbarBrand>
              <NavbarToggler onClick={() => this.toggle()} />
              <Collapse isOpen={this.state.isOpen} navbar timeout={0}>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <ThemeSelector />
                  </NavItem>
                  <LanguageSelector />
                </Nav>
              </Collapse>
            </Navbar>
          </header>
        )}
      </GlobalContainerContext.Consumer>
    )
  }
}

export default Header

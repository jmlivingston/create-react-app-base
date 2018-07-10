import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import GlobalContainerContext from './GlobalContainerContext'
import LanguageSelector from './LanguageSelector'
import ThemeSelector from './ThemeSelector'

import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from '../Common'

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

  togglelogInModal() {
    this.setState(prevState => ({
      islogInModalOpen: !prevState.islogInModalOpen
    }))
  }

  render() {
    return (
      <GlobalContainerContext.Consumer>
        {context => (
          <header>
            {this.props.strings.routes && (
              <Navbar color="dark" dark={true} fixed="top" expand="md">
                <NavbarBrand tag={Link} to={this.props.strings.routes.home.path}>
                  {this.props.strings.routes.home.displayName}
                </NavbarBrand>
                <NavbarToggler onClick={() => this.toggle()} />
                <Collapse isOpen={this.state.isOpen} navbar timeout={0}>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink tag={Link} to={this.props.strings.routes.languageTester.path}>
                        {this.props.strings.routes.languageTester.displayName}
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <ThemeSelector />
                    </NavItem>
                    <LanguageSelector />
                  </Nav>
                </Collapse>
              </Navbar>
            )}
          </header>
        )}
      </GlobalContainerContext.Consumer>
    )
  }
}

export default Header

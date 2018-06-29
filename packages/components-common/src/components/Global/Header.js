import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import GlobalContainerContext from './GlobalContainerContext'
import LanguageSelector from 'components/Global/LanguageSelector'
import ThemeSelector from 'components/Global/ThemeSelector'

import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Modal,
  ModalHeader,
  ModalBody,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown
} from 'components/Common'
import LogIn from 'components/Auth/LogIn'

class Header extends PureComponent {
  state = {
    isOpen: false
  }

  static propTypes = {
    strings: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
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
            <Navbar color="dark" dark={true} fixed="top" expand="md">
              <NavbarBrand tag={Link} to={this.props.strings.routes.home.path}>
                {this.props.strings.routes.home.displayName}
              </NavbarBrand>
              <NavbarToggler onClick={() => this.toggle()} />
              <Collapse isOpen={this.state.isOpen} navbar timeout={0}>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink tag={Link} to={this.props.strings.routes.about.path}>
                      {this.props.strings.routes.about.displayName}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to={this.props.strings.routes.styleGuide.path}>
                      {this.props.strings.routes.styleGuide.displayName}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to={this.props.strings.routes.languageTester.path}>
                      {this.props.strings.routes.languageTester.displayName}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to={this.props.strings.routes.todo.path}>
                      {this.props.strings.routes.todo.displayName}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to={this.props.strings.routes.siteMap.path}>
                      {this.props.strings.routes.siteMap.displayName}
                    </NavLink>
                  </NavItem>
                  {this.props.user.firstName ? (
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        {this.props.user.firstName} {this.props.user.lastName}
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem tag={Link} to={this.props.strings.routes.userSettings.path}>
                          {this.props.strings.routes.userSettings.displayName}
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem onClick={() => context.auth.logOut()}>{this.props.strings.logOut}</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  ) : (
                    <NavItem>
                      <span className="nav-link cursor-pointer" onClick={() => this.togglelogInModal()}>
                        {this.props.strings.logIn}
                      </span>
                    </NavItem>
                  )}
                  <NavItem>
                    <ThemeSelector />
                  </NavItem>
                  <LanguageSelector />
                </Nav>
              </Collapse>
            </Navbar>
            <Modal isOpen={this.state.islogInModalOpen} toggle={() => this.togglelogInModal()}>
              <ModalHeader toggle={() => this.togglelogInModal()}>{this.props.strings.logIn}</ModalHeader>
              <ModalBody>
                <LogIn onLoggedIn={() => this.togglelogInModal()} />
              </ModalBody>
            </Modal>
          </header>
        )}
      </GlobalContainerContext.Consumer>
    )
  }
}

export default Header

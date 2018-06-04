import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import { GlobalContainerContext } from 'components/Global/GlobalContainer'
import LanguageSelector from 'components/Global/LanguageSelector'

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
import Login from 'components/Auth/Login'

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

  toggleLoginModal() {
    this.setState(prevState => ({
      isLoginModalOpen: !prevState.isLoginModalOpen
    }))
  }

  render() {
    return (
      <GlobalContainerContext.Consumer>
        {context => (
          <header>
            <Navbar color="dark" dark fixed="top" expand="md">
              <NavbarBrand href={this.props.strings.routes.home.path}>
                {this.props.strings.routes.home.displayName}
              </NavbarBrand>
              <NavbarToggler onClick={() => this.toggle()} />
              <Collapse isOpen={this.state.isOpen} navbar timeout={0}>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href={this.props.strings.routes.about.path}>
                      {this.props.strings.routes.about.displayName}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href={this.props.strings.routes.todo.path}>
                      {this.props.strings.routes.todo.displayName}
                    </NavLink>
                  </NavItem>
                  {this.props.user.firstName ? (
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        {this.props.user.firstName} {this.props.user.lastName}
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem href={this.props.strings.routes.userSettings.path}>
                          {this.props.strings.routes.userSettings.displayName}
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem onClick={() => context.state.logOut()}>{this.props.strings.logOut}</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  ) : (
                    <NavItem>
                      <span className="nav-link cursor-pointer" onClick={() => this.toggleLoginModal()}>
                        {this.props.strings.logIn}
                      </span>
                    </NavItem>
                  )}
                  <LanguageSelector />
                </Nav>
              </Collapse>
            </Navbar>`
            <Modal isOpen={this.state.isLoginModalOpen} toggle={() => this.toggleLoginModal()}>
              <ModalHeader toggle={() => this.toggleLoginModal()}>{this.props.strings.logIn}</ModalHeader>
              <ModalBody>
                <Login />
              </ModalBody>
            </Modal>
          </header>
        )}
      </GlobalContainerContext.Consumer>
    )
  }
}

export default Header

const NavTabsCode = `import React, { PureComponent } from 'react'

import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from '@myorg/components-common'

class NavTabs extends PureComponent {
  state = {
    dropdownOpen: false
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }

  render() {
    return (
      <Nav tabs>
        <NavItem>
          <NavLink href="/" active>
            Link
          </NavLink>
        </NavItem>
        <Dropdown nav isOpen={this.state.dropdownOpen} toggle={() => this.toggle()}>
          <DropdownToggle nav caret>
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavItem>
          <NavLink href="/">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="/">
            Disabled Link
          </NavLink>
        </NavItem>
      </Nav>
    )
  }
}

export default NavTabs
`

export default NavTabsCode

const ButtonDropdownDefaultCode = `import React, { PureComponent } from 'react'

import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'components/Common'

class ButtonDropdownDefault extends PureComponent {
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
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={() => this.toggle()}>
        <DropdownToggle caret>Button Dropdown</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    )
  }
}

export default ButtonDropdownDefault
`

export default ButtonDropdownDefaultCode

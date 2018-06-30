const ButtonDropdownMultiCode = `import React, { PureComponent } from 'react'

import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from '@myorg/components-common'

class ButtonDropdownMulti extends PureComponent {
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
        <DropdownToggle color="primary" caret>
          Dropdown
        </DropdownToggle>
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

export default ButtonDropdownMulti
`

export default ButtonDropdownMultiCode

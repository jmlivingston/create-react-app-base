const ButtonDropdownMultiSplitCode = `import React, { PureComponent } from 'react'

import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from '@myorg/components'

class ButtonDropdownMultiSplit extends PureComponent {
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
        <Button id="caret" color="primary">
          Dropdown
        </Button>
        <DropdownToggle split color="primary" />
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

export default ButtonDropdownMultiSplit
`

export default ButtonDropdownMultiSplitCode

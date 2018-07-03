import React, { PureComponent } from 'react'

import { InputGroupButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from '@myorg/components'

class FormInputGroupButtonDropdown extends PureComponent {
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
      <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={() => this.toggle()}>
        <DropdownToggle caret>Button Dropdown</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </InputGroupButtonDropdown>
    )
  }
}

export default FormInputGroupButtonDropdown

const DropDownCustomCode = `import React, { PureComponent } from 'react'

import { Dropdown, DropdownMenu, DropdownToggle } from 'components/Common'

class DropDownCustom extends PureComponent {
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
      <Dropdown isOpen={this.state.dropdownOpen} toggle={() => this.toggle()}>
        <DropdownToggle
          tag="span"
          data-toggle="dropdown"
          aria-expanded={this.state.dropdownOpen}>
          Custom Dropdown Content
        </DropdownToggle>
        <DropdownMenu>
          <div onClick={() => this.toggle()}>Custom dropdown item</div>
          <div onClick={() => this.toggle()}>Custom dropdown item</div>
          <div onClick={() => this.toggle()}>Custom dropdown item</div>
          <div onClick={() => this.toggle()}>Custom dropdown item</div>
        </DropdownMenu>
      </Dropdown>
    )
  }
}

export default DropDownCustom
`

export default DropDownCustomCode

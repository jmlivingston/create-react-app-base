const ButtonDropdownMultiSplitCode = `import React from 'react'
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'components/Common'

export default class ButtonDropdownMultiSplit extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false
    }
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
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
`

export default ButtonDropdownMultiSplitCode

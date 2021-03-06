const FormInputGroupButtonCode = `import React, { Fragment, PureComponent } from 'react'

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  Input,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from '@myorg/components'

class FormInputGroupButton extends PureComponent {
  state = {
    dropdownOpen: false,
    splitButtonOpen: false
  }

  toggleDropdown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  toggleSplit() {
    this.setState({
      splitButtonOpen: !this.state.splitButtonOpen
    })
  }

  render() {
    return (
      <Fragment>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <Button>I'm a button</Button>
          </InputGroupAddon>
          <Input />
        </InputGroup>
        <br />
        <InputGroup>
          <Input />
          <InputGroupButtonDropdown
            addonType="append"
            isOpen={this.state.dropdownOpen}
            toggle={() => this.toggleDropdown()}>
            <DropdownToggle caret>Button Dropdown</DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </InputGroupButtonDropdown>
        </InputGroup>
        <br />
        <InputGroup>
          <InputGroupButtonDropdown
            addonType="prepend"
            isOpen={this.state.splitButtonOpen}
            toggle={() => this.toggleSplit()}>
            <Button outline>Split Button</Button>
            <DropdownToggle split outline />
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </InputGroupButtonDropdown>
          <Input placeholder="and..." />
          <InputGroupAddon addonType="append">
            <Button color="secondary">I'm a button</Button>
          </InputGroupAddon>
        </InputGroup>
      </Fragment>
    )
  }
}

export default FormInputGroupButton
`

export default FormInputGroupButtonCode

import React, { Component } from 'react'

import { ThemeContainer } from './components/theme/ThemeContainer'
import { Alert, Button, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from './components/common'
import ThemeSelector from './components/theme/ThemeSelector'

class App extends Component {

  state = {
    dropdownOpen: false
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <ThemeContainer>
        <ThemeSelector />
        <Alert>Test</Alert>
        <Button>Test</Button>
        <Dropdown toggle={() => this.toggle()} isOpen={this.state.dropdownOpen}>
          <DropdownToggle caret>Dropdown</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </ThemeContainer>
    )
  }
}

export default App

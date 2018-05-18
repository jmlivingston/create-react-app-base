import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { ThemeContainerContext } from './ThemeContainer'

class ThemeSelector extends Component {
  state = {}

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }

  render() {
    return (
      <ThemeContainerContext.Consumer>
        {context => (
          <Dropdown isOpen={this.state.dropdownOpen} toggle={() => this.toggle()}>
            <DropdownToggle caret>{context.state.theme}</DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => context.state.updateTheme('Dark')}>Dark</DropdownItem>
              <DropdownItem onClick={() => context.state.updateTheme('Original')}>Original</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        )}
      </ThemeContainerContext.Consumer>
    )
  }
}

export default ThemeSelector

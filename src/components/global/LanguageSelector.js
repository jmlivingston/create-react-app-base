import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'components/common'
import React, { Component } from 'react'

import { GlobalContainerContext } from './GlobalContainer'

class LanguageSelector extends Component {
  state = {}

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }

  render() {
    return (
      <GlobalContainerContext.Consumer>
        {context => (
          <Dropdown isOpen={this.state.dropdownOpen} toggle={() => this.toggle()}>
            <DropdownToggle caret>{context.state.language}</DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => context.state.updateLanguage('en')}>English</DropdownItem>
              <DropdownItem onClick={() => context.state.updateLanguage('ja')}>Japanese</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        )}
      </GlobalContainerContext.Consumer>
    )
  }
}

export default LanguageSelector

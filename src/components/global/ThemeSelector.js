import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'components/common'
import React, { Component } from 'react'

import { GlobalContainerContext } from './GlobalContainer'

class ThemeSelector extends Component {
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
            <DropdownToggle caret>{context.state.theme}</DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => context.state.updateTheme('custom')}>Custom</DropdownItem>
              <DropdownItem onClick={() => context.state.updateTheme('darkly')}>Darkly</DropdownItem> 
              <DropdownItem onClick={() => context.state.updateTheme('original')}>Original</DropdownItem>
              <DropdownItem onClick={() => context.state.updateTheme('yeti')}>Yeti</DropdownItem>
             
            </DropdownMenu>
          </Dropdown>
        )}
      </GlobalContainerContext.Consumer>
    )
  }
}

export default ThemeSelector

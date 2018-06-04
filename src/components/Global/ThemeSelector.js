import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'components/Common'
import React, { PureComponent } from 'react'

import { GlobalContainerContext } from './GlobalContainer'

class ThemeSelector extends PureComponent {
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
            <DropdownToggle caret>{context.state.user.theme}</DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => context.state.updateUserByPropertyValue('theme', 'custom')}>
                Custom
              </DropdownItem>
              <DropdownItem onClick={() => context.state.updateUserByPropertyValue('theme', 'darkly')}>
                Darkly
              </DropdownItem>
              <DropdownItem onClick={() => context.state.updateUserByPropertyValue('theme', 'original')}>
                Original
              </DropdownItem>
              <DropdownItem onClick={() => context.state.updateUserByPropertyValue('theme', 'yeti')}>Yeti</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        )}
      </GlobalContainerContext.Consumer>
    )
  }
}

export default ThemeSelector

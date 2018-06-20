import PropTypes from 'prop-types'
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
            <DropdownToggle nav={this.props.nav} caret>
              {context.user.theme.toUpperCase()}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => context.auth.updateUser({ theme: 'custom' })}>Custom</DropdownItem>
              <DropdownItem onClick={() => context.auth.updateUser({ theme: 'darkly' })}>Darkly</DropdownItem>
              <DropdownItem onClick={() => context.auth.updateUser({ theme: 'original' })}>Original</DropdownItem>
              <DropdownItem onClick={() => context.auth.updateUser({ theme: 'yeti' })}>Yeti</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        )}
      </GlobalContainerContext.Consumer>
    )
  }
}

ThemeSelector.defaultProps = {
  nav: true
}

ThemeSelector.propTypes = {
  nav: PropTypes.bool
}

export default ThemeSelector

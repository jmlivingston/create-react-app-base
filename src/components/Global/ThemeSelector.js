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
              {context.user.get().theme.toUpperCase()}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => context.user.updateProperties({ theme: 'custom' })}>Custom</DropdownItem>
              <DropdownItem onClick={() => context.user.updateProperties({ theme: 'darkly' })}>Darkly</DropdownItem>
              <DropdownItem onClick={() => context.user.updateProperties({ theme: 'original' })}>Original</DropdownItem>
              <DropdownItem onClick={() => context.user.updateProperties({ theme: 'yeti' })}>Yeti</DropdownItem>
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

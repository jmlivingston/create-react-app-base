import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'components/Common'
import { GlobalContainerContext } from './GlobalContainer'

class LanguageSelector extends PureComponent {
  state = {}

  static propTypes = {
    nav: PropTypes.bool,
    right: PropTypes.bool
  }

  static defaultProps = {
    nav: true,
    right: true
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }

  render() {
    return (
      <GlobalContainerContext.Consumer>
        {context => (
          <Dropdown isOpen={this.state.dropdownOpen} toggle={() => this.toggle()} nav={this.props.nav} inNavbar>
            <DropdownToggle nav={this.props.nav} caret>
              {context.user.language.toUpperCase()}
            </DropdownToggle>
            <DropdownMenu right={this.props.right}>
              <DropdownItem onClick={() => context.auth.updateUser({ language: 'en' })}>English</DropdownItem>
              <DropdownItem onClick={() => context.auth.updateUser({ language: 'ja' })}>Japanese</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        )}
      </GlobalContainerContext.Consumer>
    )
  }
}

export default LanguageSelector

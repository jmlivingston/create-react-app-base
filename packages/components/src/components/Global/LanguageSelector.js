import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from '../Common'
import GlobalContainerContext from './GlobalContainerContext'

class LanguageSelector extends PureComponent {
  state = {}

  static propTypes = {
    nav: PropTypes.bool,
    onChange: PropTypes.func,
    right: PropTypes.bool,
    value: PropTypes.string
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

  updateLanguage(context, language) {
    if (this.props.onChange) {
      this.props.onChange(language)
    } else {
      context.auth.updateUser({ language })
    }
  }

  render() {
    return (
      <GlobalContainerContext.Consumer>
        {context => (
          <Dropdown isOpen={this.state.dropdownOpen} toggle={() => this.toggle()} nav={this.props.nav} inNavbar>
            <DropdownToggle nav={this.props.nav} caret className="text-uppercase">
              {this.props.value || context.user.language}
            </DropdownToggle>
            <DropdownMenu right={this.props.right}>
              <DropdownItem onClick={() => this.updateLanguage(context, 'en')}>English</DropdownItem>
              <DropdownItem onClick={() => this.updateLanguage(context, 'ja')}>Japanese</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        )}
      </GlobalContainerContext.Consumer>
    )
  }
}

export default LanguageSelector

import PropTypes from 'prop-types'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from '@myorg/components-common'
import React, { PureComponent } from 'react'

import GlobalContainerContext from './GlobalContainerContext'

class ThemeSelector extends PureComponent {
  state = {}

  static defaultProps = {
    nav: true
  }

  static propTypes = {
    nav: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.string
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }

  updateTheme(context, theme) {
    if (this.props.onChange) {
      this.props.onChange(theme)
    } else {
      context.auth.updateUser({ theme })
    }
  }

  render() {
    return (
      <GlobalContainerContext.Consumer>
        {context => (
          <Dropdown isOpen={this.state.dropdownOpen} toggle={() => this.toggle()}>
            <DropdownToggle nav={this.props.nav} caret className="text-uppercase">
              {this.props.value || context.user.theme}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => this.updateTheme(context, 'custom')}>Custom</DropdownItem>
              <DropdownItem onClick={() => this.updateTheme(context, 'darkly')}>Darkly</DropdownItem>
              <DropdownItem onClick={() => this.updateTheme(context, 'original')}>Original</DropdownItem>
              <DropdownItem onClick={() => this.updateTheme(context, 'yeti')}>Yeti</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        )}
      </GlobalContainerContext.Consumer>
    )
  }
}

export default ThemeSelector

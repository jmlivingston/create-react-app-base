import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import { Dropdown, DropdownMenu, DropdownToggle } from 'components/Common'
import config from '../../config'

storiesOf('Misc', module)
  .addDecorator(config.wrapper)
  .add(
    'CustomDropdown',
    withInfo(config.defaults.info)(() => (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle tag="span" onClick={this.toggle} data-toggle="dropdown" aria-expanded={this.state.dropdownOpen}>
          Custom Dropdown Content
        </DropdownToggle>
        <DropdownMenu>
          <div onClick={this.toggle}>Custom dropdown item</div>
          <div onClick={this.toggle}>Custom dropdown item</div>
          <div onClick={this.toggle}>Custom dropdown item</div>
          <div onClick={this.toggle}>Custom dropdown item</div>
        </DropdownMenu>
      </Dropdown>
    ))
  )

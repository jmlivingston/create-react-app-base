import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'components/Common'
import config from '../../config'

storiesOf('Dropdown', module)
  .addDecorator(config.wrapper)
  .add(
    'Default',
    withInfo(config.defaults.info)(() => (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>Dropdown</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    ))
  )

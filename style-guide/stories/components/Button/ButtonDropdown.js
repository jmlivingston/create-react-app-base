import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'components/Common'
import config from '../../config'

storiesOf('Button', module)
  .addDecorator(config.wrapper)
  .add(
    'Dropdown',
    withInfo(config.defaults.info)(() => (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>Button Dropdown</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    ))
  )

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'components/Common'
import config from '../../config'

storiesOf('Button', module)
  .addDecorator(config.wrapper)
  .add(
    'DropdownMultiSplit',
    withInfo(config.defaults.info)(() => (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <Button id="caret" color="primary">
          Select
        </Button>
        <DropdownToggle split color="primary" />
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

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'components/Common'
import config from '../../config'

storiesOf('Dropdown', module)
  .addDecorator(config.wrapper)
  .add(
    'Uncontrolled',
    withInfo(config.defaults.info)(() => (
      <UncontrolledDropdown>
        <DropdownToggle caret>Dropdown</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    ))
  )

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

// import { InputGroupButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'components/Common'
import config from '../../config'

storiesOf('Input', module)
  .addDecorator(config.wrapper)
  .add(
    'GroupButtonDropdown',
    withInfo(config.defaults.info)(() => (
      // <InputGroupButtonDropdown addonType={addonType} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
      //   <DropdownToggle caret>Button Dropdown</DropdownToggle>
      //   <DropdownMenu>
      //     <DropdownItem header>Header</DropdownItem>
      //     <DropdownItem disabled>Action</DropdownItem>
      //     <DropdownItem>Another Action</DropdownItem>
      //     <DropdownItem divider />
      //     <DropdownItem>Another Action</DropdownItem>
      //   </DropdownMenu>
      // </InputGroupButtonDropdown>
      <div>todo</div>
    ))
  )

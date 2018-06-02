import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'components/Common'
import config from '../../config'

storiesOf('Dropdown', module)
  .addDecorator(config.wrapper)
  .add(
    'Sizing',
    withInfo(config.defaults.info)(() => (
      // <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} {...this.props}>
      //   <DropdownToggle caret>Dropdown</DropdownToggle>
      //   <DropdownMenu>
      //     <DropdownItem header>Header</DropdownItem>
      //     <DropdownItem>Action</DropdownItem>
      //   </DropdownMenu>
      // </Dropdown>
      <div>todo</div>
    ))
  )

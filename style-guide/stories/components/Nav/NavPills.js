import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'components/Common'
import config from '../../config'

storiesOf('Nav', module)
  .addDecorator(config.wrapper)
  .add(
    'Pills',
    withInfo(config.defaults.info)(() => (
      <div>
        <Nav pills>
          <NavItem>
            <NavLink href="/" active>
              Link
            </NavLink>
          </NavItem>
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink href="/">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="/">
              Disabled Link
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    ))
  )

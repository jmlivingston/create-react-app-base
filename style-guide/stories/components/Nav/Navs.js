import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

import { Nav, NavItem, NavLink } from 'components/Common'
import config from '../../config'

storiesOf('Nav', module)
  .addDecorator(config.wrapper)
  .add(
    'Navs',
    withInfo(config.defaults.info)(() => (
      <div>
        <p>List Based</p>
        <Nav>
          <NavItem>
            <NavLink href="/">Link</NavLink>
          </NavItem>
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
        <hr />
        <p>Link Based</p>
        <Nav>
          <NavLink href="/">Link</NavLink> <NavLink href="/">Link</NavLink> <NavLink href="/">Another Link</NavLink>{' '}
          <NavLink disabled href="/">
            Disabled Link
          </NavLink>
        </Nav>
      </div>
    ))
  )

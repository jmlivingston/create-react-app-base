import React, { Fragment } from 'react'

import { Nav, NavItem, NavLink } from 'components/Common'

const NavDefault = () => {
  return (
    <Fragment>
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
    </Fragment>
  )
}

export default NavDefault

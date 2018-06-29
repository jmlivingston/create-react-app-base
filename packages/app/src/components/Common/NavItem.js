import { NavItem as ReactStrapNavItem } from 'reactstrap'
import React from 'react'

const NavItem = props => {
  return <ReactStrapNavItem {...props} />
}

NavItem.propTypes = ReactStrapNavItem.propTypes

export default NavItem

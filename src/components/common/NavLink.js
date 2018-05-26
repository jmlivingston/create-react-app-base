import { NavLink as ReactStrapNavLink } from 'reactstrap'

import React from 'react'

const NavLink = props => {
  return <ReactStrapNavLink {...props} />
}

NavLink.propTypes = ReactStrapNavLink.propTypes

export default NavLink

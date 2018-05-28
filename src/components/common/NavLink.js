import { NavLink as ReactStrapNavLink } from 'reactstrap'
import React from 'react'

import ThemeImporter from '../global/ThemeImporter'

const NavLink = props => {
  return (
    <ThemeImporter>
      <ReactStrapNavLink {...props} />
    </ThemeImporter>
  )
}

NavLink.propTypes = ReactStrapNavLink.propTypes

export default NavLink

import { NavItem as ReactStrapNavItem } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/global/ThemeImporter'

const NavItem = props => {
  return (
    <ThemeImporter>
      <ReactStrapNavItem {...props} />
    </ThemeImporter>
  )
}

NavItem.propTypes = ReactStrapNavItem.propTypes

export default NavItem

import { NavItem as ReactStrapNavItem } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const NavItem = props => {
  return (
    <Fragment>
      <ThemeImporter path="_navitem">
        <ReactStrapNavItem {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

NavItem.propTypes = ReactStrapNavItem.propTypes

export default NavItem

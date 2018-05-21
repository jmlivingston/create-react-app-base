import { NavLink as ReactStrapNavLink } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const NavLink = props => {
  return (
    <Fragment>
      <ThemeImporter path="_navlink">
        <ReactStrapNavLink {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

NavLink.propTypes = ReactStrapNavLink.propTypes

export default NavLink

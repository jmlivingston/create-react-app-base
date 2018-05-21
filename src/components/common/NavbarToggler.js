import { NavbarToggler as ReactStrapNavbarToggler } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const NavbarToggler = props => {
  return (
    <Fragment>
      <ThemeImporter path="_navbartoggler">
        <ReactStrapNavbarToggler {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

NavbarToggler.propTypes = ReactStrapNavbarToggler.propTypes

export default NavbarToggler

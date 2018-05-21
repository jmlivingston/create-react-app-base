import { NavbarBrand as ReactStrapNavbarBrand } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const NavbarBrand = props => {
  return (
    <Fragment>
      <ThemeImporter path="_navbarbrand">
        <ReactStrapNavbarBrand {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

NavbarBrand.propTypes = ReactStrapNavbarBrand.propTypes

export default NavbarBrand

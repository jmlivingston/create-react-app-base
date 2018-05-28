import { NavbarBrand as ReactStrapNavbarBrand } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/global/ThemeImporter'

const NavbarBrand = props => {
  return (
    <ThemeImporter>
      <ReactStrapNavbarBrand {...props} />
    </ThemeImporter>
  )
}

NavbarBrand.propTypes = ReactStrapNavbarBrand.propTypes

export default NavbarBrand

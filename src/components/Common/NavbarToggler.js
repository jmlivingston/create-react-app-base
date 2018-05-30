import { NavbarToggler as ReactStrapNavbarToggler } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/Global/ThemeImporter'

const NavbarToggler = props => {
  return (
    <ThemeImporter>
      <ReactStrapNavbarToggler {...props} />
    </ThemeImporter>
  )
}

NavbarToggler.propTypes = ReactStrapNavbarToggler.propTypes

export default NavbarToggler
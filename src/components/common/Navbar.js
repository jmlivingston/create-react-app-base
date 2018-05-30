import { Navbar as ReactStrapNavbar } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/Global/ThemeImporter'

const Navbar = props => {
  return (
    <ThemeImporter sassNames={['_navbar']}>
      <ReactStrapNavbar {...props} />
    </ThemeImporter>
  )
}

Navbar.propTypes = ReactStrapNavbar.propTypes

export default Navbar

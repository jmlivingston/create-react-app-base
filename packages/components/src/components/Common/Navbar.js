import { Navbar as ReactStrapNavbar } from 'reactstrap'
import React from 'react'

import ThemeImporter from '../Global/ThemeImporter'

const Navbar = props => {
  return (
    <ThemeImporter sassNames={['navbar']}>
      <ReactStrapNavbar {...props} />
    </ThemeImporter>
  )
}

Navbar.propTypes = ReactStrapNavbar.propTypes

export default Navbar

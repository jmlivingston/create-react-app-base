import { Navbar as ReactStrapNavbar } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../global/ThemeImporter'

const Navbar = props => {
  return (
    <Fragment>
      <ThemeImporter path="_navbar">
        <ReactStrapNavbar {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

Navbar.propTypes = ReactStrapNavbar.propTypes

export default Navbar

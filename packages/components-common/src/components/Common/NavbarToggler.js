import { NavbarToggler as ReactStrapNavbarToggler } from 'reactstrap'
import React from 'react'

const NavbarToggler = props => {
  return <ReactStrapNavbarToggler {...props} />
}

NavbarToggler.propTypes = ReactStrapNavbarToggler.propTypes

export default NavbarToggler

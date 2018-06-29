import { NavbarBrand as ReactStrapNavbarBrand } from 'reactstrap'
import React from 'react'

const NavbarBrand = props => {
  return <ReactStrapNavbarBrand {...props} />
}

NavbarBrand.propTypes = ReactStrapNavbarBrand.propTypes

export default NavbarBrand

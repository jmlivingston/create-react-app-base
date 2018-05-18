import { NavDropdown as ReactStrapNavDropdown } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const NavDropdown = props => {
  return (
    <Fragment>
      <ThemeImporter path="_navdropdown">
        <ReactStrapNavDropdown {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

NavDropdown.propTypes = ReactStrapNavDropdown.propTypes

export default NavDropdown

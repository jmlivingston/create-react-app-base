import { Dropdown as ReactStrapDropdown } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const Dropdown = props => {
  return (
    <Fragment>
      <ThemeImporter path="_dropdown">
        <ReactStrapDropdown {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

Dropdown.propTypes = ReactStrapDropdown.propTypes

export default Dropdown

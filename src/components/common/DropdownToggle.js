import { DropdownToggle as ReactStrapDropdownToggle } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const DropdownToggle = props => {
  return (
    <Fragment>
      <ThemeImporter path="_dropdowntoggle">
        <ReactStrapDropdownToggle {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

DropdownToggle.propTypes = ReactStrapDropdownToggle.propTypes

export default DropdownToggle

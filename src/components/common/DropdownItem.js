import { DropdownItem as ReactStrapDropdownItem } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const DropdownItem = props => {
  return (
    <Fragment>
      <ThemeImporter path="_dropdownitem">
        <ReactStrapDropdownItem {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

DropdownItem.propTypes = ReactStrapDropdownItem.propTypes

export default DropdownItem

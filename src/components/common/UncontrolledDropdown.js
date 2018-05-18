import { UncontrolledDropdown as ReactStrapUncontrolledDropdown } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const UncontrolledDropdown = props => {
  return (
    <Fragment>
      <ThemeImporter path="_uncontrolleddropdown">
        <ReactStrapUncontrolledDropdown {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

UncontrolledDropdown.propTypes = ReactStrapUncontrolledDropdown.propTypes

export default UncontrolledDropdown

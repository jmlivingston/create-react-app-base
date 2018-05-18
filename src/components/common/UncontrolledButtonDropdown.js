import { UncontrolledButtonDropdown as ReactStrapUncontrolledButtonDropdown } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const UncontrolledButtonDropdown = props => {
  return (
    <Fragment>
      <ThemeImporter path="_uncontrolledbuttondropdown">
        <ReactStrapUncontrolledButtonDropdown {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

UncontrolledButtonDropdown.propTypes = ReactStrapUncontrolledButtonDropdown.propTypes

export default UncontrolledButtonDropdown

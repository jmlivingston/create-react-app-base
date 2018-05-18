import { UncontrolledAlert as ReactStrapUncontrolledAlert } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const UncontrolledAlert = props => {
  return (
    <Fragment>
      <ThemeImporter path="_uncontrolledalert">
        <ReactStrapUncontrolledAlert {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

UncontrolledAlert.propTypes = ReactStrapUncontrolledAlert.propTypes

export default UncontrolledAlert

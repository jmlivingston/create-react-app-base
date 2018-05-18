import { ModalBody as ReactStrapModalBody } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const ModalBody = props => {
  return (
    <Fragment>
      <ThemeImporter path="_modalbody">
        <ReactStrapModalBody {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

ModalBody.propTypes = ReactStrapModalBody.propTypes

export default ModalBody

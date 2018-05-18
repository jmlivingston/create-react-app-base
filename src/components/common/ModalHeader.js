import { ModalHeader as ReactStrapModalHeader } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const ModalHeader = props => {
  return (
    <Fragment>
      <ThemeImporter path="_modalheader">
        <ReactStrapModalHeader {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

ModalHeader.propTypes = ReactStrapModalHeader.propTypes

export default ModalHeader

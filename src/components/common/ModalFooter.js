import { ModalFooter as ReactStrapModalFooter } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const ModalFooter = props => {
  return (
    <Fragment>
      <ThemeImporter path="_modalfooter">
        <ReactStrapModalFooter {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

ModalFooter.propTypes = ReactStrapModalFooter.propTypes

export default ModalFooter

import { ModalHeader as ReactStrapModalHeader } from 'reactstrap'
import React from 'react'

import ThemeImporter from '../global/ThemeImporter'

const ModalHeader = props => {
  return (
    <ThemeImporter>
      <ReactStrapModalHeader {...props} />
    </ThemeImporter>
  )
}

ModalHeader.propTypes = ReactStrapModalHeader.propTypes

export default ModalHeader

import { ModalBody as ReactStrapModalBody } from 'reactstrap'
import React from 'react'

import ThemeImporter from '../global/ThemeImporter'

const ModalBody = props => {
  return (
    <ThemeImporter>
      <ReactStrapModalBody {...props} />
    </ThemeImporter>
  )
}

ModalBody.propTypes = ReactStrapModalBody.propTypes

export default ModalBody

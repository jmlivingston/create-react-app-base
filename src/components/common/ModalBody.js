import { ModalBody as ReactStrapModalBody } from 'reactstrap'

import React from 'react'

const ModalBody = props => {
  return <ReactStrapModalBody {...props} />
}

ModalBody.propTypes = ReactStrapModalBody.propTypes

export default ModalBody

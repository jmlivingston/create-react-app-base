import { ModalHeader as ReactStrapModalHeader } from 'reactstrap'

import React from 'react'

const ModalHeader = props => {
  return <ReactStrapModalHeader {...props} />
}

ModalHeader.propTypes = ReactStrapModalHeader.propTypes

export default ModalHeader

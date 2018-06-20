import { ModalFooter as ReactStrapModalFooter } from 'reactstrap'
import React from 'react'

const ModalFooter = props => {
  return <ReactStrapModalFooter {...props} />
}

ModalFooter.propTypes = ReactStrapModalFooter.propTypes

export default ModalFooter

import { Input as ReactStrapInput } from 'reactstrap'
import React from 'react'

const Input = props => {
  return <ReactStrapInput {...props} />
}

Input.propTypes = ReactStrapInput.propTypes

export default Input

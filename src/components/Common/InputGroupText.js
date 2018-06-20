import { InputGroupText as ReactStrapInputGroupText } from 'reactstrap'
import React from 'react'

const InputGroupText = props => {
  return <ReactStrapInputGroupText {...props} />
}

InputGroupText.propTypes = ReactStrapInputGroupText.propTypes

export default InputGroupText

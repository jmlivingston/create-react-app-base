import { InputGroupAddon as ReactStrapInputGroupAddon } from 'reactstrap'

import React from 'react'

const InputGroupAddon = props => {
  return <ReactStrapInputGroupAddon {...props} />
}

InputGroupAddon.propTypes = ReactStrapInputGroupAddon.propTypes

export default InputGroupAddon

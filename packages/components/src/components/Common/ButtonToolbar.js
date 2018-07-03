import { ButtonToolbar as ReactStrapButtonToolbar } from 'reactstrap'
import React from 'react'

const ButtonToolbar = props => {
  return <ReactStrapButtonToolbar {...props} />
}

ButtonToolbar.propTypes = ReactStrapButtonToolbar.propTypes

export default ButtonToolbar

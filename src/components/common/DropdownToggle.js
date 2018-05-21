import { DropdownToggle as ReactStrapDropdownToggle } from 'reactstrap'
import React from 'react'

const DropdownToggle = props => {
  return <ReactStrapDropdownToggle {...props}>{props.children}</ReactStrapDropdownToggle>
}

DropdownToggle.propTypes = ReactStrapDropdownToggle.propTypes

export default DropdownToggle

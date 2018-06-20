import { DropdownItem as ReactStrapDropdownItem } from 'reactstrap'
import React from 'react'

const DropdownItem = props => {
  return <ReactStrapDropdownItem {...props}>{props.children}</ReactStrapDropdownItem>
}

DropdownItem.propTypes = ReactStrapDropdownItem.propTypes

export default DropdownItem

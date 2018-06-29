import { DropdownMenu as ReactStrapDropdownMenu } from 'reactstrap'
import React from 'react'

const DropdownMenu = props => {
  return <ReactStrapDropdownMenu {...props}>{props.children}</ReactStrapDropdownMenu>
}

DropdownMenu.propTypes = ReactStrapDropdownMenu.propTypes

export default DropdownMenu

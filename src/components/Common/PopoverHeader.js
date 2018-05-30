import { PopoverHeader as ReactStrapPopoverHeader } from 'reactstrap'
import React from 'react'

const PopoverHeader = props => {
  return <ReactStrapPopoverHeader {...props} />
}

PopoverHeader.propTypes = ReactStrapPopoverHeader.propTypes

export default PopoverHeader

import { PopoverBody as ReactStrapPopoverBody } from 'reactstrap'
import React from 'react'

const PopoverBody = props => {
  return <ReactStrapPopoverBody {...props} />
}

PopoverBody.propTypes = ReactStrapPopoverBody.propTypes

export default PopoverBody

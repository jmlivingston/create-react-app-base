import { PopoverHeader as ReactStrapPopoverHeader } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const PopoverHeader = props => {
  return (
    <Fragment>
      <ThemeImporter path="_popoverheader">
        <ReactStrapPopoverHeader {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

PopoverHeader.propTypes = ReactStrapPopoverHeader.propTypes

export default PopoverHeader

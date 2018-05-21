import { PopoverTitle as ReactStrapPopoverTitle } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const PopoverTitle = props => {
  return (
    <Fragment>
      <ThemeImporter path="_popovertitle">
        <ReactStrapPopoverTitle {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

PopoverTitle.propTypes = ReactStrapPopoverTitle.propTypes

export default PopoverTitle

import { PopoverBody as ReactStrapPopoverBody } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const PopoverBody = props => {
  return (
    <Fragment>
      <ThemeImporter path="_popoverbody">
        <ReactStrapPopoverBody {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

PopoverBody.propTypes = ReactStrapPopoverBody.propTypes

export default PopoverBody

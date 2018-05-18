import { PopoverContent as ReactStrapPopoverContent } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const PopoverContent = props => {
  return (
    <Fragment>
      <ThemeImporter path="_popovercontent">
        <ReactStrapPopoverContent {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

PopoverContent.propTypes = ReactStrapPopoverContent.propTypes

export default PopoverContent

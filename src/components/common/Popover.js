import { Popover as ReactStrapPopover } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const Popover = props => {
  return (
    <Fragment>
      <ThemeImporter path="_popover">
        <ReactStrapPopover {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

Popover.propTypes = ReactStrapPopover.propTypes

export default Popover

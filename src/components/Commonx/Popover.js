import { Popover as ReactStrapPopover } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/Global/ThemeImporter'

const Popover = props => {
  return (
    <ThemeImporter sassNames={['_popover']}>
      <ReactStrapPopover {...props} />
    </ThemeImporter>
  )
}

Popover.propTypes = ReactStrapPopover.propTypes

export default Popover

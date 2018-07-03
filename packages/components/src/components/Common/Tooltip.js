import { Tooltip as ReactStrapTooltip } from 'reactstrap'
import React from 'react'

import ThemeImporter from '../Global/ThemeImporter'

const Tooltip = props => {
  return (
    <ThemeImporter sassNames={['tooltip']}>
      <ReactStrapTooltip {...props} />
    </ThemeImporter>
  )
}

Tooltip.propTypes = ReactStrapTooltip.propTypes

export default Tooltip

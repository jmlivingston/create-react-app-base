import { Tooltip as ReactStrapTooltip } from 'reactstrap'
import React from 'react'

import ThemeImporter from '../global/ThemeImporter'

const Tooltip = props => {
  return (
    <ThemeImporter sassNames={['_tooltip']}>
      <ReactStrapTooltip {...props} />
    </ThemeImporter>
  )
}

Tooltip.propTypes = ReactStrapTooltip.propTypes

export default Tooltip

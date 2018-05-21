import { Tooltip as ReactStrapTooltip } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const Tooltip = props => {
  return (
    <Fragment>
      <ThemeImporter path="_tooltip">
        <ReactStrapTooltip {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

Tooltip.propTypes = ReactStrapTooltip.propTypes

export default Tooltip

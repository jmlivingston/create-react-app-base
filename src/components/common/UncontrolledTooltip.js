import { UncontrolledTooltip as ReactStrapUncontrolledTooltip } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../global/ThemeImporter'

const UncontrolledTooltip = props => {
  return (
    <Fragment>
      <ThemeImporter path="_tooltip">
        <ReactStrapUncontrolledTooltip {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

UncontrolledTooltip.propTypes = ReactStrapUncontrolledTooltip.propTypes

export default UncontrolledTooltip

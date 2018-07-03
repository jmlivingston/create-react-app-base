import { UncontrolledTooltip as ReactStrapUncontrolledTooltip } from 'reactstrap'
import React from 'react'

import ThemeImporter from '../Global/ThemeImporter'

const UncontrolledTooltip = props => {
  return (
    <ThemeImporter sassNames={['tooltip']}>
      <ReactStrapUncontrolledTooltip {...props} />
    </ThemeImporter>
  )
}

UncontrolledTooltip.propTypes = ReactStrapUncontrolledTooltip.propTypes

export default UncontrolledTooltip

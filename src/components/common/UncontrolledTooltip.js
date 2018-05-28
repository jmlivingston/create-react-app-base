import { UncontrolledTooltip as ReactStrapUncontrolledTooltip } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/global/ThemeImporter'

const UncontrolledTooltip = props => {
  return (
    <ThemeImporter sassNames={['_tooltip']}>
      <ReactStrapUncontrolledTooltip {...props} />
    </ThemeImporter>
  )
}

UncontrolledTooltip.propTypes = ReactStrapUncontrolledTooltip.propTypes

export default UncontrolledTooltip

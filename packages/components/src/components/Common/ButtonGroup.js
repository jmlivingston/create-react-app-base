import { ButtonGroup as ReactStrapButtonGroup } from 'reactstrap'
import React from 'react'

import ThemeImporter from '../Global/ThemeImporter'

const ButtonGroup = props => {
  return (
    <ThemeImporter sassNames={['button-group']}>
      <ReactStrapButtonGroup {...props} />
    </ThemeImporter>
  )
}

ButtonGroup.propTypes = ReactStrapButtonGroup.propTypes

export default ButtonGroup

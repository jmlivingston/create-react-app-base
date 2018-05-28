import { ButtonGroup as ReactStrapButtonGroup } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/global/ThemeImporter'

const ButtonGroup = props => {
  return (
    <ThemeImporter sassNames={['_button-group']}>
      <ReactStrapButtonGroup {...props} />
    </ThemeImporter>
  )
}

ButtonGroup.propTypes = ReactStrapButtonGroup.propTypes

export default ButtonGroup

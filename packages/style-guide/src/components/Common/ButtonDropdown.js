import { ButtonDropdown as ReactStrapButtonDropdown } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/Global/ThemeImporter'

const ButtonDropdown = props => {
  return (
    <ThemeImporter sassNames={['buttons', 'dropdown']}>
      <ReactStrapButtonDropdown {...props} />
    </ThemeImporter>
  )
}

ButtonDropdown.propTypes = ReactStrapButtonDropdown.propTypes

export default ButtonDropdown

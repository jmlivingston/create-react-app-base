import { ButtonToolbar as ReactStrapButtonToolbar } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/Global/ThemeImporter'

const ButtonToolbar = props => {
  return (
    <ThemeImporter>
      <ReactStrapButtonToolbar {...props} />
    </ThemeImporter>
  )
}

ButtonToolbar.propTypes = ReactStrapButtonToolbar.propTypes

export default ButtonToolbar

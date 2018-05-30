import { InputGroupText as ReactStrapInputGroupText } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/Global/ThemeImporter'

const InputGroupText = props => {
  return (
    <ThemeImporter>
      <ReactStrapInputGroupText {...props} />
    </ThemeImporter>
  )
}

InputGroupText.propTypes = ReactStrapInputGroupText.propTypes

export default InputGroupText

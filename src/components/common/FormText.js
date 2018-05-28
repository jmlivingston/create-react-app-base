import { FormText as ReactStrapFormText } from 'reactstrap'
import React from 'react'

import ThemeImporter from '../global/ThemeImporter'

const FormText = props => {
  return (
    <ThemeImporter>
      <ReactStrapFormText {...props} />
    </ThemeImporter>
  )
}

FormText.propTypes = ReactStrapFormText.propTypes

export default FormText

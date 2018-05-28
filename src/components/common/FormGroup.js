import { FormGroup as ReactStrapFormGroup } from 'reactstrap'
import React from 'react'

import ThemeImporter from '../global/ThemeImporter'

const FormGroup = props => {
  return (
    <ThemeImporter>
      <ReactStrapFormGroup {...props} />
    </ThemeImporter>
  )
}

FormGroup.propTypes = ReactStrapFormGroup.propTypes

export default FormGroup

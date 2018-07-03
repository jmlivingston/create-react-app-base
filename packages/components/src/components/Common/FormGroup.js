import { FormGroup as ReactStrapFormGroup } from 'reactstrap'
import React from 'react'

const FormGroup = props => {
  return <ReactStrapFormGroup {...props} />
}

FormGroup.propTypes = ReactStrapFormGroup.propTypes

export default FormGroup

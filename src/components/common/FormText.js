import { FormText as ReactStrapFormText } from 'reactstrap'

import React from 'react'

const FormText = props => {
  return <ReactStrapFormText {...props} />
}

FormText.propTypes = ReactStrapFormText.propTypes

export default FormText

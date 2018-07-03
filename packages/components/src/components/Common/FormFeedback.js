import { FormFeedback as ReactStrapFormFeedback } from 'reactstrap'
import React from 'react'

const FormFeedback = props => {
  return <ReactStrapFormFeedback {...props} />
}

FormFeedback.propTypes = ReactStrapFormFeedback.propTypes

export default FormFeedback

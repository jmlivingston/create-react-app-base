import { Form as ReactStrapForm } from 'reactstrap'
import React from 'react'

import ThemeImporter from '../Global/ThemeImporter'

const Form = props => {
  return (
    <ThemeImporter sassNames={['forms']}>
      <ReactStrapForm {...props} />
    </ThemeImporter>
  )
}

Form.propTypes = ReactStrapForm.propTypes

export default Form

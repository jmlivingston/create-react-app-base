import { Form as ReactStrapForm } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/global/ThemeImporter'

const Form = props => {
  return (
    <ThemeImporter sassNames={['_forms']}>
      <ReactStrapForm {...props} />
    </ThemeImporter>
  )
}

Form.propTypes = ReactStrapForm.propTypes

export default Form

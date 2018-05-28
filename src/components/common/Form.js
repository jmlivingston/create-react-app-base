import { Form as ReactStrapForm } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../global/ThemeImporter'

const Form = props => {
  return (
    <Fragment>
      <ThemeImporter path="_forms">
        <ReactStrapForm {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

Form.propTypes = ReactStrapForm.propTypes

export default Form

import { Form as ReactStrapForm } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const Form = props => {
  return (
    <Fragment>
      <ThemeImporter path="_form">
        <ReactStrapForm {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

Form.propTypes = ReactStrapForm.propTypes

export default Form

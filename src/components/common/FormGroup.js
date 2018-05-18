import { FormGroup as ReactStrapFormGroup } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const FormGroup = props => {
  return (
    <Fragment>
      <ThemeImporter path="_formgroup">
        <ReactStrapFormGroup {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

FormGroup.propTypes = ReactStrapFormGroup.propTypes

export default FormGroup

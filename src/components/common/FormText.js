import { FormText as ReactStrapFormText } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const FormText = props => {
  return (
    <Fragment>
      <ThemeImporter path="_formtext">
        <ReactStrapFormText {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

FormText.propTypes = ReactStrapFormText.propTypes

export default FormText

import { FormFeedback as ReactStrapFormFeedback } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const FormFeedback = props => {
  return (
    <Fragment>
      <ThemeImporter path="_formfeedback">
        <ReactStrapFormFeedback {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

FormFeedback.propTypes = ReactStrapFormFeedback.propTypes

export default FormFeedback

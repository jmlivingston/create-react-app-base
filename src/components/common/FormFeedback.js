import { FormFeedback as ReactStrapFormFeedback } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/global/ThemeImporter'

const FormFeedback = props => {
  return (
    <ThemeImporter>
      <ReactStrapFormFeedback {...props} />
    </ThemeImporter>
  )
}

FormFeedback.propTypes = ReactStrapFormFeedback.propTypes

export default FormFeedback

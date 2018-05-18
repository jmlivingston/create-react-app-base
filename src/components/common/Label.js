import { Label as ReactStrapLabel } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const Label = props => {
  return (
    <Fragment>
      <ThemeImporter path="_label">
        <ReactStrapLabel {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

Label.propTypes = ReactStrapLabel.propTypes

export default Label

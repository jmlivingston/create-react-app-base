import { Progress as ReactStrapProgress } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import ThemeImporter from '../theme/ThemeImporter'

const Progress = props => {
  return (
    <Fragment>
      <ThemeImporter path="_progress">
        <ReactStrapProgress {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

Progress.propTypes = ReactStrapProgress.propTypes

export default Progress

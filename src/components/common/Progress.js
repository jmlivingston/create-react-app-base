import { Progress as ReactStrapProgress } from 'reactstrap'

import React, { Fragment } from 'react'

import ThemeImporter from '../global/ThemeImporter'

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

import { Progress as ReactStrapProgress } from 'reactstrap'
import React from 'react'

import ThemeImporter from '../Global/ThemeImporter'

const Progress = props => {
  return (
    <ThemeImporter sassNames={['progress']}>
      <ReactStrapProgress {...props} />
    </ThemeImporter>
  )
}

Progress.propTypes = ReactStrapProgress.propTypes

export default Progress

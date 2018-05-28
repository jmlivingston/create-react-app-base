import { Progress as ReactStrapProgress } from 'reactstrap'
import React from 'react'

import ThemeImporter from '../global/ThemeImporter'

const Progress = props => {
  return (
    <ThemeImporter sassNames={['_progress']}>
      <ReactStrapProgress {...props} />
    </ThemeImporter>
  )
}

Progress.propTypes = ReactStrapProgress.propTypes

export default Progress

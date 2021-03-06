import { UncontrolledAlert as ReactStrapUncontrolledAlert } from 'reactstrap'
import React from 'react'

import ThemeImporter from '../Global/ThemeImporter'

const UncontrolledAlert = props => {
  return (
    <ThemeImporter sassNames={['alert']}>
      <ReactStrapUncontrolledAlert {...props} />
    </ThemeImporter>
  )
}

UncontrolledAlert.propTypes = ReactStrapUncontrolledAlert.propTypes

export default UncontrolledAlert

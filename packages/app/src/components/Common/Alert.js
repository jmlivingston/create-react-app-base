import { Alert as ReactStrapAlert } from 'reactstrap'
import React from 'react'

import ThemeImporter from 'components/Global/ThemeImporter'

const Alert = props => {
  return (
    <ThemeImporter sassNames={['alert']}>
      <ReactStrapAlert {...props} />
    </ThemeImporter>
  )
}

Alert.propTypes = ReactStrapAlert.propTypes

export default Alert

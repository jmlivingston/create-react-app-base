import { Alert as ReactStrapAlert } from 'reactstrap'
import React, { Fragment } from 'react'

import ThemeImporter from '../global/ThemeImporter'

const Alert = props => {
  return (
    <Fragment>
      <ThemeImporter path="_alert">
        <ReactStrapAlert {...props} />
      </ThemeImporter>
    </Fragment>
  )
}

Alert.propTypes = ReactStrapAlert.propTypes

export default Alert

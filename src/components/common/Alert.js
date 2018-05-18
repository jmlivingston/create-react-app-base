import { Alert as ReactStrapAlert } from 'reactstrap'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

const Alert = props => {
  return (
    <Fragment>
        <ReactStrapAlert {...props} />
    </Fragment>
  )
}

Alert.propTypes = ReactStrapAlert.propTypes

export default Alert

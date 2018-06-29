import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import { Error } from 'components/Common'

const ErrorContainer = ({ children, error, isLoaded = false }) => {
  return isLoaded ? error ? <Error error={error} /> : <Fragment>{children}</Fragment> : null
}

ErrorContainer.propTypes = {
  children: PropTypes.node,
  error: PropTypes.object,
  isLoaded: PropTypes.bool
}

export default ErrorContainer

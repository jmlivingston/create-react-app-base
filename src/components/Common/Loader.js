import { default as LoaderControl } from 'react-loaders'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import APP from 'config/appConstants'
import { Error } from 'components/Common'

const Loader = ({
  children,
  error,
  isLoaded,
  message = 'Loading...',
  name = APP.LOADER_NAME,
  pastDelay = false,
  timedOut = false
}) => {
  import(`loaders.css/src/animations/${name}.scss`)
  const Loading = ({ message }) => (
    <div className="text-center">
      <LoaderControl type={name} />
      <h3 className="pt-3">{message}</h3>
    </div>
  )
  if (children) {
    return isLoaded ? (
      error ? (
        <Error friendlyError={error} />
      ) : (
        <Fragment>{children}</Fragment>
      )
    ) : (
      <Loading message={message} />
    )
  } else {
    if (error) {
      return <Error friendlyError={error} />
    } else if (timedOut) {
      return <Error friendlyError="Taking a long time. Refresh page to retry." />
    } else if (pastDelay) {
      return <Loading message={message} />
    } else {
      return null
    }
  }
}

Loader.propTypes = {
  children: PropTypes.node,
  error: PropTypes.string,
  isLoaded: PropTypes.bool,
  message: PropTypes.string,
  name: PropTypes.oneOf([
    'ball-pulse',
    'ball-pulse-sync',
    'ball-scale',
    'ball-scale-random',
    'ball-rotate',
    'ball-clip-rotate',
    'ball-clip-rotate-pulse',
    'ball-clip-rotate-multiple',
    'ball-scale-ripple',
    'ball-scale-ripple-multiple',
    'ball-beat',
    'ball-scale-multiple',
    'ball-triangle-trace',
    'ball-pulse-rise',
    'ball-grid-beat',
    'ball-grid-pulse',
    'ball-spin-fade-loader',
    'ball-spin-loader',
    'ball-zig-zag',
    'ball-zig-zag-deflect',
    'line-scale',
    'line-scale-random',
    'line-scale-pulse-out',
    'line-scale-pulse-out-rapid',
    'line-spin-fade-loader',
    'triangle-skew-spin',
    'square-spin',
    'pacman',
    'cube-transition',
    'semi-circle-spin'
  ]),
  pastDelay: PropTypes.bool,
  timedOut: PropTypes.bool
}

export default Loader

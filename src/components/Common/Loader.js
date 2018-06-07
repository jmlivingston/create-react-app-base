import { default as LoaderControl } from 'react-loaders'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import APP from 'config/appConstants'

const Loader = ({ name = APP.LOADER_NAME, message = 'Loading...', children, data }) => {
  import(`loaders.css/src/animations/${name}.scss`)
  const Loading = ({ message }) => (
    <div className="text-center">
      <LoaderControl type={name} />
      <h3 className="pt-3">{message}</h3>
    </div>
  )
  return children ? (
    data ? (
      <Fragment>{children}</Fragment>
    ) : (
      <Loading message={message} />
    )
  ) : (
    <Loading message={message} />
  )
}

Loader.propTypes = {
  children: PropTypes.node,
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
  ])
}

export default Loader

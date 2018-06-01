import { default as LoaderControl } from 'react-loaders'
import PropTypes from 'prop-types'
import React from 'react'

const Loader = ({ name = 'line-scale-pulse-out-rapid', message = 'Loading...' }) => {
  import(`loaders.css/src/animations/${name}.scss`)
  return (
    <div className="text-center">
      <LoaderControl type="line-scale-pulse-out-rapid" />
      <h3 className="pt-3">{message}</h3>
    </div>
  )
}

Loader.propTypes = {
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

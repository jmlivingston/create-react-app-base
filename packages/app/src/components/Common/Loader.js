import { default as LoaderControl } from 'react-loaders'
import PropTypes from 'prop-types'
import React, { Fragment, PureComponent } from 'react'

import { Error } from 'components/Common'
import APP from 'config/appConstants'
import GlobalContainerContext from 'components/Global/GlobalContainerContext'

const Loading = ({ message, name }) => (
  <div className="text-center">
    <LoaderControl type={name} />
    <h3 className="pt-3">{message}</h3>
  </div>
)

Loading.propTypes = {
  message: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

class Loader extends PureComponent {
  static propTypes = {
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

  static defaultProps = {
    isLoaded: false,
    message: 'Loading...',
    name: APP.LOADER_NAME,
    pastDelay: false,
    timedOut: false
  }

  render() {
    return (
      <GlobalContainerContext.Consumer>
        {context => {
          if (this.props.name !== APP.LOADER_NAME || context.user.theme !== APP.DEFAULT_PROFILE.theme) {
            import(`../../styles/themes/${context.user.theme}/loaders/animations/${this.props.name}.scss`)
          }
          if (this.props.children) {
            return this.props.isLoaded ? (
              this.props.error ? (
                <Error friendlyError={this.props.error} />
              ) : (
                <Fragment>{this.props.children}</Fragment>
              )
            ) : (
              <Loading message={this.props.message} name={this.props.name} />
            )
          } else {
            if (this.props.error) {
              return <Error friendlyError={this.props.error} />
            } else if (this.props.timedOut) {
              return <Error friendlyError="Taking a long time. Refresh page to retry." />
            } else if (this.props.pastDelay) {
              return <Loading message={this.props.message} name={this.props.name} />
            } else {
              return null
            }
          }
        }}
      </GlobalContainerContext.Consumer>
    )
  }
}

export default Loader

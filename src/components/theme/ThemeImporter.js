import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { ThemeContainerContext } from './ThemeContainer'

class ThemeImporter extends Component {
  state = {
    isLoaded: false
  }

  render() {
    return (
      <ThemeContainerContext.Consumer>
        {context => {
          if (this.props.path) {
            if (!context.state.componentsLoaded[this.props.path]) {
              import(`../../styles/components/${this.props.path}.scss`).then(() => {
                context.state.updateComponentLoaded(this.props.path)
                this.setState({
                  isLoaded: true
                })
              })
            }
          }
          return this.state.isLoaded ? this.props.children : null
        }}
      </ThemeContainerContext.Consumer>
    )
  }
}

export default ThemeImporter

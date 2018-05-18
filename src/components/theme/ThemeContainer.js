import PropTypes from 'prop-types'
import React, { Component } from 'react'

const ThemeContainerContext = React.createContext()

class ThemeContainer extends Component {
  static displayName = 'ThemeContainer'
  static propTypes = {}
  state = {
    theme: 'Dark',
    componentsLoaded: {},
    updateComponentLoaded: componentName => {
      this.setState(prevState => {
        return {
          componentsLoaded: {
            ...prevState.componentsLoaded,
            [componentName]: true
          }
        }
      })
    },
    updateTheme: theme => {
      this.setState({
        theme
      })
    }
  }
  render() {
    return (
      <ThemeContainerContext.Provider value={{ state: this.state }}>
        {this.props.children}
      </ThemeContainerContext.Provider>
    )
  }
}

export { ThemeContainer, ThemeContainerContext }

import React, { Component } from 'react'

const ThemeContainerContext = React.createContext()

class ThemeContainer extends Component {
  static displayName = 'ThemeContainer'
  static propTypes = {}
  state = {
    theme: localStorage.getItem('theme') || 'original',
    updateTheme: theme => {
      if (this.state.theme !== theme) {
        localStorage.setItem('theme', theme)
        window.location.reload()
      }
    }
  }

  componentDidMount() {
    localStorage.setItem('theme', this.state.theme)
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

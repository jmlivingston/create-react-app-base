import React, { Component } from 'react'

const GlobalContainerContext = React.createContext()

class GlobalContainer extends Component {
  static displayName = 'GlobalContainer'
  static propTypes = {}
  state = {
    theme: localStorage.getItem('theme') || 'original',
    language: localStorage.getItem('language') || 'en',
    defaultLanguage: 'en',
    updateTheme: theme => {
      if (this.state.theme !== theme) {
        localStorage.setItem('theme', theme)
        window.location.reload()
      }
    },
    updateLanguage: language => {
      if (this.state.language !== language) {
        localStorage.setItem('language', language)
        this.setState({
          language
        })
      }
    }
  }

  componentDidMount() {
    localStorage.setItem('theme', this.state.theme)
    localStorage.setItem('language', this.state.language)
  }

  render() {
    return (
      <GlobalContainerContext.Provider value={{ state: this.state }}>
        {this.props.children}
      </GlobalContainerContext.Provider>
    )
  }
}

export { GlobalContainer, GlobalContainerContext }

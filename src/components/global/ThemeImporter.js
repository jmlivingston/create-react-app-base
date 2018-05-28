import React, { Component } from 'react'

import { GlobalContainerContext } from './GlobalContainer'

class ThemeImporterInnerComponent extends Component {
  state = {
    isLoaded: false
  }

  componentDidMount() {
    import(`../../styles/themes/${this.props.theme}/_bootstrap.scss`)
    import(`../../styles/themes/${this.props.theme}/components/${this.props.path}.scss`).then(() => {
      this.setState({
        isLoaded: true
      })
    })
  }

  render() {
    return this.state.isLoaded ? this.props.children : null
  }
}

class ThemeImporter extends Component {
  render() {
    return (
      <GlobalContainerContext.Consumer>
        {context => {
          const props = { ...context.state, ...this.props }
          return <ThemeImporterInnerComponent {...props} />
        }}
      </GlobalContainerContext.Consumer>
    )
  }
}

export default ThemeImporter

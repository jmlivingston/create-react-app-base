import React, { Component } from 'react'

import { GlobalContainerContext } from './GlobalContainer'

class ThemeImporterInnerComponent extends Component {
  state = {
    isLoaded: false
  }

  componentDidMount() {
    if (this.props.theme) {
      import(`../../styles/themes/${this.props.theme}/_bootstrap.scss`).then(() => {
        if (this.props.sassNames) {
          this.props.sassNames.forEach(sassName => {
            import(`../../styles/themes/${this.props.theme}/components/${sassName}.scss`).then(() => {
              this.setState({
                isLoaded: true
              })
            })
          })
        } else {
          this.setState({
            isLoaded: true
          })
        }
      })
    }
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
          let props = {}
          if (context) {
            props = { ...context.state, ...this.props }
          } else {
            props = { ...this.props }
          }
          return <ThemeImporterInnerComponent {...props} />
        }}
      </GlobalContainerContext.Consumer>
    )
  }
}

export default ThemeImporter

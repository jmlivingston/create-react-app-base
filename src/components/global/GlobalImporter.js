import React, { Component, Fragment } from 'react'

import { GlobalContainerContext } from './GlobalContainer'

// Cache for better performance

class GlobalImporterInnerComponent extends Component {
  state = {
    strings: {},
    user: {}
  }

  getStrings = async name => {
    let strings = {}
    await import(`../${this.props.languagePath}/strings/${this.props.componentName}.${this.props.defaultLanguage}.json`)
      .then(values => {
        strings = values
      })
      .catch(() => {})
    await import(`../${this.props.languagePath}/strings/${this.props.componentName}.${this.props.language}.json`)
      .then(values => {
        strings = { ...strings, ...values }
      })
      .catch(() => {})
    this.setState({
      strings,
      language: this.props.language
    })
  }

  getUser = async () => {
    this.setState({
      user: {
        firstName: 'John',
        lastName: 'Livingston'
      }
    })
  }

  componentDidUpdate(props, state) {
    if (this.props.language !== this.state.language) {
      this.getStrings(this.props.languagePath)
    }
  }

  componentDidMount() {
    this.getStrings(this.props.languagePath)
    this.getUser()
  }

  render() {
    return <Fragment>{this.props.render({ ...this.state })}</Fragment>
  }
}

class GlobalImporter extends Component {
  render() {
    return (
      <GlobalContainerContext.Consumer>
        {context => {
          const props = { ...context.state, ...this.props }
          return <GlobalImporterInnerComponent {...props} />
        }}
      </GlobalContainerContext.Consumer>
    )
  }
}

export default GlobalImporter
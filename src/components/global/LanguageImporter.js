import React, { Component, Fragment } from 'react'

import { GlobalContainerContext } from './GlobalContainer'

class LanguageImporterInnerComponent extends Component {
  state = {
    strings: {}
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

  componentDidUpdate(props, state) {
    if (this.props.language !== this.state.language) {
      this.getStrings(this.props.languagePath)
    }
  }

  componentDidMount() {
    this.getStrings(this.props.languagePath)
  }

  render() {
    return <Fragment>{this.props.render(this.state.strings)}</Fragment>
  }
}

class LanguageImporter extends Component {
  render() {
    return (
      <GlobalContainerContext.Consumer>
        {context => {
          const props = { ...context.state, ...this.props }
          return <LanguageImporterInnerComponent {...props} />
        }}
      </GlobalContainerContext.Consumer>
    )
  }
}

export default LanguageImporter

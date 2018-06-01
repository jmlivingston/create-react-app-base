import PropTypes from 'prop-types'
import React, { Component, Fragment } from 'react'

import { GlobalContainerContext } from './GlobalContainer'

class GlobalImporterInnerComponent extends Component {
  state = {
    strings: {},
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {}
  }

  static propTypes = {
    defaultLanguage: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    render: PropTypes.func.isRequired,
    stringName: PropTypes.string.isRequired
  }

  // TODO: CACHE FOR OPTIMIZATION
  getStrings = async () => {
    let strings = {}
    await import(`../../strings/${this.props.stringName}/${this.props.stringName}.${this.props.defaultLanguage}.json`)
      .then(values => {
        strings = values
      })
      .catch(() => {})
    await import(`../../strings/${this.props.stringName}/${this.props.stringName}.${this.props.language}.json`)
      .then(values => {
        strings = { ...strings, ...values }
      })
      .catch(() => {})
    this.setState(prevState => ({
      strings: {
        ...prevState.strings,
        ...strings
      },
      language: this.props.language
    }))
  }

  componentDidUpdate(props, state) {
    if (this.props.language !== this.state.language) {
      this.getStrings()
    }
  }

  componentDidMount() {
    this.getStrings()
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

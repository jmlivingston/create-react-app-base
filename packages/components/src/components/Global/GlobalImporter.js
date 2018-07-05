import PropTypes from 'prop-types'
import React, { PureComponent, Fragment } from 'react'

import { APP } from '@myorg/core'
import GlobalContainerContext from './GlobalContainerContext'

class GlobalImporterInnerComponent extends PureComponent {
  state = {
    strings: null
  }

  static propTypes = {
    appName: PropTypes.string.isRequired,
    render: PropTypes.func.isRequired,
    stringNames: PropTypes.arrayOf(PropTypes.string).isRequired,
    user: PropTypes.object.isRequired
  }

  // TODO: CACHE FOR OPTIMIZATION
  getStrings = async () => {
    const defaultLanguage = APP.DEFAULT_PROFILE.language
    let strings = {}
    const defaultLanguagePromises = this.props.stringNames.map(stringName =>
      import(`@myorg/resources/strings/${this.props.appName}/${stringName}/${stringName}.${defaultLanguage}.json`)
    )

    // Note: Default language always expected and fallback when user language not found.
    // If user language not found, we catch, but ignore error.
    // Stricter rules can be put in place if necessary
    const languagePromises = this.props.stringNames.map(stringName =>
      import(`@myorg/resources/strings/${this.props.appName}/${stringName}/${stringName}.${
        this.props.user.language
      }.json`).catch(() => {})
    )

    await Promise.all(defaultLanguagePromises).then(values => {
      strings = values.reduce((acc = {}, value) => ({ ...acc, ...value }), {})
    })

    await Promise.all(languagePromises).then(values => {
      const newStrings = values.reduce((acc = {}, value) => ({ ...acc, ...value }), {})
      strings = { ...strings, ...newStrings }
    })

    this.setState(prevState => ({
      strings: {
        ...prevState.strings,
        ...strings
      }
    }))
  }

  componentDidMount() {
    this.getStrings()
  }

  render() {
    return this.state.strings === null ? null : (
      <Fragment>{this.props.render({ ...this.state, user: this.props.user })}</Fragment>
    )
  }
}

class GlobalImporter extends PureComponent {
  render() {
    return (
      <GlobalContainerContext.Consumer>
        {context => {
          const props = { ...context, ...this.props }
          return <GlobalImporterInnerComponent {...props} />
        }}
      </GlobalContainerContext.Consumer>
    )
  }
}

export default GlobalImporter

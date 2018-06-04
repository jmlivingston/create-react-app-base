import PropTypes from 'prop-types'
import React, { PureComponent, Fragment } from 'react'

import { GlobalContainerContext } from './GlobalContainer'

class GlobalImporterInnerComponent extends PureComponent {
  state = {
    strings: {}
  }

  static propTypes = {
    defaultLanguage: PropTypes.string.isRequired,
    render: PropTypes.func.isRequired,
    stringNames: PropTypes.arrayOf(PropTypes.string).isRequired,
    user: PropTypes.object.isRequired
  }

  // TODO: CACHE FOR OPTIMIZATION
  getStrings = async () => {
    let strings = {}
    const defaultLanguagePromises = this.props.stringNames.map(stringName =>
      import(`../../strings/${stringName}/${stringName}.${this.props.defaultLanguage}.json`)
    )
    const languagePromises = this.props.stringNames.map(stringName =>
      import(`../../strings/${stringName}/${stringName}.${this.props.user.language}.json`)
    )
    await Promise.all(defaultLanguagePromises)
      .then(values => {
        strings = values.reduce((acc = {}, value) => ({ ...acc, ...value }), {})
      })
      .catch(() => {})

    await Promise.all(languagePromises)
      .then(values => {
        const foo = values.reduce((acc = {}, value) => ({ ...acc, ...value }), {})
        strings = { ...strings, ...foo }
      })
      .catch(() => {})
    this.setState(prevState => ({
      strings: {
        ...prevState.strings,
        ...strings
      }
    }))
  }

  componentWillMount() {
    this.getStrings()
  }

  render() {
    return <Fragment>{this.props.render({ ...this.state, user: this.props.user })}</Fragment>
  }
}

class GlobalImporter extends PureComponent {
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

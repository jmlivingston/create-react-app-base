import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import { GlobalContainerContext } from './GlobalContainer'

import APP from 'config/appConstants'

class ThemeImporterInnerComponent extends PureComponent {
  state = {
    isLoaded: false
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    sassNames: PropTypes.arrayOf(PropTypes.string),
    user: PropTypes.object.isRequired
  }

  static defaultProps = {
    sassNames: []
  }

  importStyle = () => {
    const theme = this.props.user ? this.props.user.get().theme : APP.DEFAULT_PROFILE.theme
    let promises = []
    let fileExtension = 'scss'
    if (!process.env.REACT_APP_DESIGN_MODE) {
      fileExtension = 'css'
      this.setState({
        isLoaded: true
      })
    }

    if (this.props.sassBase) {
      promises.push(import(`../../styles/themes/${theme}/bootstrap.${fileExtension}`))
    } else if (this.props.sassFooter) {
      // HACK: Need to figure out a way to load this last. Only a problem with Bootswatch themes
      setTimeout(() => {
        promises.push(import(`../../styles/themes/${theme}/bootstrap-footer.${fileExtension}`))
      }, 500)
    } else {
      promises = this.props.sassNames
        .filter(sassName => {
          const hasStyle = this.props.styleList.get()[sassName] === true
          if (!hasStyle) {
            this.props.styleList.set(sassName)
          }
          return !hasStyle
        })
        .map(sassName => {
          return import(`../../styles/themes/${theme}/components/${sassName}.${fileExtension}`)
        })
    }

    if (promises.length > 0) {
      Promise.all(promises).then(() => {
        this.setState({
          isLoaded: true
        })
      })
    } else {
      this.setState({
        isLoaded: true
      })
    }
  }

  componentDidMount() {
    this.importStyle()
  }

  render() {
    return this.state.isLoaded ? this.props.children : null
  }
}

class ThemeImporter extends PureComponent {
  render() {
    return (
      <GlobalContainerContext.Consumer>
        {context => {
          let props = { ...context, ...this.props }
          return <ThemeImporterInnerComponent {...props} />
        }}
      </GlobalContainerContext.Consumer>
    )
  }
}

export default ThemeImporter

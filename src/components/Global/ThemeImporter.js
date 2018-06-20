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
    sassBase: PropTypes.bool,
    sassNames: PropTypes.arrayOf(PropTypes.string),
    styleList: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
  }

  static defaultProps = {
    sassBase: false,
    sassNames: []
  }

  importStyle = () => {
    const theme = this.props.user ? this.props.user.theme : APP.DEFAULT_PROFILE.theme
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
      promises.push(import(`../../styles/themes/${theme}/bootstrap-footer.${fileExtension}`))
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
        // HACK: This moves the bootstrap-footer script to the body so it comes last. This is required for Bootswatch themes.
        if (this.props.sassBase) {
          if (process.env.NODE_ENV === 'development') {
            const e = Array.from(document.querySelectorAll('head > style')).find(
              e => e.innerText.indexOf('.position-static') !== -1
            )
            if (e) {
              document.body.appendChild(e)
            }
          } else {
            // Note assumes App.scss gets loaded first, then bootstrap.scss, then bootstrap-footer.scss
            document.body.appendChild(Array.from(document.querySelectorAll('head > link[rel="stylesheet"]'))[3])
          }
        }
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

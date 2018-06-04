import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import { GlobalContainerContext } from './GlobalContainer'

class ThemeImporterInnerComponent extends PureComponent {
  state = {
    isLoaded: false
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    sassNames: PropTypes.arrayOf(PropTypes.string),
    user: PropTypes.object.isRequired
  }

  componentDidMount() {
    const theme = this.props.user ? this.props.user.theme : 'original'
    import(`../../styles/themes/${theme}/_bootstrap.scss`).then(() => {
      if (this.props.sassNames) {
        this.props.sassNames.forEach(sassName => {
          import(`../../styles/themes/${theme}/components/${sassName}.scss`).then(() => {
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

  render() {
    return this.state.isLoaded ? this.props.children : null
  }
}

class ThemeImporter extends PureComponent {
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

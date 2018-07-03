import Loadable from 'react-loadable'
import PropTypes from 'prop-types'
import React, { Fragment, PureComponent } from 'react'

import { Button, Loader, Row, ThemeSelector } from '@myorg/components'
import './StyleGuideApp.scss'

const StyleGuideSection = ({ rootKey, styleGuideConfig }) => {
  const StyleGuideSection = Loadable({
    loader: () => import('./StyleGuideSection'),
    loading: () => <Loader />,
    render(loaded) {
      const StyleGuideSection = loaded.default
      return <StyleGuideSection rootKey={rootKey} styleGuideConfig={styleGuideConfig} />
    }
  })
  return <StyleGuideSection />
}

StyleGuideSection.propTypes = {
  rootKey: PropTypes.string.isRequired,
  styleGuideConfig: PropTypes.object.isRequired
}

class StyleGuideApp extends PureComponent {
  state = {
    isLoaded: false
  }

  static propTypes = {
    history: PropTypes.object,
    match: PropTypes.object,
    params: PropTypes.object
  }

  navigateToUrl(rootKey) {
    window.scrollTo(0, 0)
    this.setState({
      rootKey
    })
    this.props.history.push('/' + rootKey)
  }

  componentDidMount = async () => {
    const styleGuideConfig = await import('../../strings/styleGuide/styleGuide.en.json')
    this.setState({
      styleGuideConfig,
      isLoaded: true,
      rootKey: this.props.match.params.id || Object.keys(styleGuideConfig)[0]
    })
  }

  render() {
    return this.state.isLoaded ? (
      <Row>
        <div className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky py-2">
            <ThemeSelector />
            <h1>{this.props.params}</h1>
            {Object.keys(this.state.styleGuideConfig)
              .filter(key => key !== 'default')
              .map(rootKey => (
                <p key={rootKey}>
                  <Button active={this.state.rootKey === rootKey} onClick={() => this.navigateToUrl(rootKey)} size="sm">
                    {this.state.rootKey === rootKey ? <strong>{rootKey}</strong> : <Fragment>{rootKey}</Fragment>}
                  </Button>
                </p>
              ))}
          </div>
        </div>
        <div className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <StyleGuideSection rootKey={this.state.rootKey} styleGuideConfig={this.state.styleGuideConfig} />
        </div>
      </Row>
    ) : null
  }
}

export default StyleGuideApp

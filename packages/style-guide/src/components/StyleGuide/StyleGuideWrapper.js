import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import { Button, Input, InputGroup, InputGroupAddon, Row, ThemeSelector } from '@myorg/components'
import './StyleGuideApp.scss'

class StyleGuideWrapper extends PureComponent {
  state = {
    search: ''
  }

  static propTypes = {
    code: PropTypes.string,
    component: PropTypes.object,
    history: PropTypes.object,
    name: PropTypes.string,
    title: PropTypes.string
  }

  toggle(key) {
    this.setState(prevState => ({
      [key]: key ? !prevState[key] : true
    }))
  }

  componentDidMount = async () => {
    const styleGuideComponentConfig = await import(`@myorg/resources/strings/styleGuide/styleGuide.en.${
      this.props.title
    }`)

    const styleGuideConfig = await import('@myorg/resources/strings/styleGuide/styleGuide.en.keys.json')

    this.setState({
      styleGuideConfig,
      styleGuideComponentConfig
    })
  }

  updateSearch = search => {
    this.setState({
      search
    })
  }

  navigateToUrl(rootKey) {
    window.scrollTo(0, 0)
    this.setState({
      rootKey
    })
    this.props.history.push('/' + rootKey)
  }

  render() {
    return this.state.styleGuideComponentConfig ? (
      <Row>
        <div className="col-md-3 col-lg-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky py-2">
            <ThemeSelector />
            <InputGroup className="mb-3">
              <Input
                placeholder="Search..."
                value={this.state.search}
                onChange={element => this.updateSearch(element.target.value)}
              />
              {this.state.search && (
                <InputGroupAddon addonType="append" onClick={() => this.updateSearch('')}>
                  X
                </InputGroupAddon>
              )}
            </InputGroup>
            {Object.keys(this.state.styleGuideConfig)
              .filter(
                key =>
                  this.state.search
                    ? this.props.title === key
                      ? true
                      : key.toLocaleLowerCase().indexOf(this.state.search.toLocaleLowerCase()) !== -1
                    : true
              )
              .map(rootKey => (
                <p key={rootKey}>
                  <Button
                    color="primary"
                    active={this.props.title === rootKey}
                    onClick={() => this.navigateToUrl(rootKey)}
                    size="sm">
                    <strong>{rootKey}</strong>
                  </Button>
                </p>
              ))}
          </div>
        </div>
        <div className="col-md-9 ml-sm-auto col-lg-10 px-4">{this.props.children}</div>
      </Row>
    ) : null
  }
}

export default StyleGuideWrapper

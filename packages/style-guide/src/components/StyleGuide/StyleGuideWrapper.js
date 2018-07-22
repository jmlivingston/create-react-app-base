import PropTypes from 'prop-types'
import React, { Fragment, PureComponent } from 'react'
import { Code, CardBody, CardHeader, Caret, Collapse } from '@myorg/components'
import PropTypesTable from './PropTypesTable'

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
    const config = this.state.styleGuideComponentConfig
      ? this.state.styleGuideComponentConfig.children[this.props.name]
      : null
    return this.state.styleGuideComponentConfig ? (
      <Row>
        <div className="col-md-3 col-lg-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky py-2">
            <ThemeSelector />
            <h1>{this.props.title}</h1>
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
        <div className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <Fragment>
            <h2>{config.title}</h2>
            {this.props.component}
            <div className="clearfix" />
            <hr />
            <CardHeader onClick={() => this.toggle(`${this.props.name}Collapse`)} className="cursor-pointer">
              Code <Caret isToggled={this.state[`${this.props.name}Collapse`]} />
            </CardHeader>
            <Collapse isOpen={this.state[`${this.props.name}Collapse`]} timeout={0}>
              <CardBody>
                <Code code={this.props.code} label="Code" />
              </CardBody>
            </Collapse>
            {Object.keys(config.componentPropTypes).length > 0 && (
              <Fragment>
                <h3>Prop Types</h3>
                <PropTypesTable componentPropTypes={config.componentPropTypes} />
              </Fragment>
            )}
            <hr />
          </Fragment>
        </div>
      </Row>
    ) : null
  }
}

export default StyleGuideWrapper

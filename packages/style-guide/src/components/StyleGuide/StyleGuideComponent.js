import PropTypes from 'prop-types'
import React, { Fragment, PureComponent } from 'react'
import { Code, CardBody, CardHeader, Caret, Collapse } from '@myorg/components'
import PropTypesTable from './PropTypesTable'

import './StyleGuideApp.scss'

class StyleGuideComponent extends PureComponent {
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
    ) : null
  }
}

export default StyleGuideComponent

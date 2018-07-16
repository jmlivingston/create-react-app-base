import Loadable from 'react-loadable'
import PropTypes from 'prop-types'
import React, { Fragment, PureComponent } from 'react'

import { CardBody, CardHeader, Caret, Collapse } from '@myorg/components'

// TODO: Research why dynamic import takes so long after an edit.
// If this DynamicCode component is removed, an edit and recompile is very quick.
// Note: This is only a problem in dev mode, so not super critical.
// Per Dan Abramov, this is a known issue with webpack
// https://github.com/facebook/create-react-app/issues/3148
const DynamicComponent = ({ parent, child }) => {
  const DynamicComponent = Loadable({
    loading: () => null,
    loader: () => import(`./examples/components/${parent}/${child}`),
    render(loader) {
      const DynamicComponent = loader.default
      return <DynamicComponent />
    }
  })
  return <DynamicComponent />
}

DynamicComponent.propTypes = {
  child: PropTypes.string.isRequired,
  parent: PropTypes.string.isRequired
}

const PropTypesTable = ({ componentPropTypes }) => {
  const PropTypesTable = Loadable({
    loading: () => null,
    loader: () => import('./PropTypesTable'),
    render(loaded) {
      const PropTypesTable = loaded.default
      return <PropTypesTable componentPropTypes={componentPropTypes} />
    }
  })
  return <PropTypesTable />
}

PropTypesTable.propTypes = {
  componentPropTypes: PropTypes.object
}

const CodeWrapper = ({ parent, child, label }) => {
  const Code = Loadable.Map({
    loading: () => null,
    loader: {
      components: () => import('@myorg/components'),
      code: () => import(`./code/components/${parent}/${child}Code`)
    },
    render(loaded) {
      const Code = loaded.components.Code
      return <Code code={loaded.code.default} parent={parent} child={child} label={label} />
    }
  })
  return <Code />
}

CodeWrapper.propTypes = {
  child: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  parent: PropTypes.string.isRequired
}

class StyleGuideSection extends PureComponent {
  state = {}

  static propTypes = {
    rootKey: PropTypes.string.isRequired
  }

  componentDidMount = async () => {
    const styleGuideConfig = await import(`@myorg/resources/strings/styleGuide/styleGuide.en.${
      this.props.rootKey
      }.json`)
    this.setState({
      styleGuideConfig
    })
  }

  toggle(key) {
    this.setState(prevState => ({
      [key]: key ? !prevState[key] : true
    }))
  }

  render() {
    return (
      <Fragment>
        <h1>{this.props.rootKey}</h1>
        <hr />
        {this.state.styleGuideConfig &&
          Object.keys(this.state.styleGuideConfig.children).map(childKey => (
            <Fragment key={childKey}>
              <h2>{this.state.styleGuideConfig.children[childKey].title}</h2>
              <DynamicComponent parent={this.props.rootKey} child={childKey} />
              <div className="clearfix" />
              <hr />
              <CardHeader onClick={() => this.toggle(`${childKey}Collapse`)} className="cursor-pointer">
                Code <Caret isToggled={this.state[`${childKey}Collapse`]} />
              </CardHeader>
              <Collapse isOpen={this.state[`${childKey}Collapse`]} timeout={0}>
                <CardBody>
                  <CodeWrapper parent={this.props.rootKey} child={childKey} label="Code" />
                </CardBody>
              </Collapse>
              {Object.keys(this.state.styleGuideConfig.children[childKey].componentPropTypes).length > 0 && (
                <Fragment>
                  <h3>Prop Types</h3>
                  <PropTypesTable
                    componentPropTypes={this.state.styleGuideConfig.children[childKey].componentPropTypes}
                  />
                </Fragment>
              )}
              <hr />
            </Fragment>
          ))}
      </Fragment>
    )
  }
}

export default StyleGuideSection

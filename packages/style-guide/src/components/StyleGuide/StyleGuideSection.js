import Loadable from 'react-loadable'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

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

const StyleGuideSection = ({ rootKey, styleGuideConfig }) => {
  return (
    <Fragment>
      <h1>{rootKey}</h1>
      <hr />
      {styleGuideConfig &&
        Object.keys(styleGuideConfig[rootKey].children).map(childKey => (
          <Fragment key={childKey}>
            <h2>{styleGuideConfig[rootKey].children[childKey].title}</h2>
            <DynamicComponent parent={rootKey} child={childKey} />
            <CodeWrapper parent={rootKey} child={childKey} label="Code" />
            {Object.keys(styleGuideConfig[rootKey].children[childKey].componentPropTypes).length > 0 && (
              <Fragment>
                <h3>Prop Types</h3>
                <PropTypesTable componentPropTypes={styleGuideConfig[rootKey].children[childKey].componentPropTypes} />
              </Fragment>
            )}
          </Fragment>
        ))}
    </Fragment>
  )
}

StyleGuideSection.propTypes = {
  rootKey: PropTypes.string.isRequired,
  styleGuideConfig: PropTypes.object.isRequired
}

export default StyleGuideSection

import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import styleGuideConfig from 'strings/styleGuide/styleGuide.en.json'
import { Loader } from 'components/Common'

import Loadable from 'react-loadable'
import Code from './Code'
import PropTypesTable from './PropTypesTable'

const DynamicComponent = ({ parent, child }) => {
  const Comp = Loadable({
    loading: () => <Loader />,
    loader: () => import(`style-guide/examples/components/${parent}/${child}`),
    render(loaded, props) {
      const Comp = loaded.default
      return <Comp />
    }
  })
  return <Comp />
}

DynamicComponent.propTypes = {
  child: PropTypes.string.isRequired,
  parent: PropTypes.string.isRequired
}

const StyleGuideSection = ({ rootKey }) => {
  return (
    <Fragment key={rootKey}>
      <h1>{rootKey}</h1>
      <hr />
      {Object.keys(styleGuideConfig[rootKey].children).map(childKey => (
        <Fragment key={childKey}>
          <h2>
            {childKey
              .replace(rootKey, rootKey + ' - ')
              .replace(/([A-Z]+)/g, ' $1')
              .replace(/([A-Z][a-z])/g, ' $1')}
          </h2>
          <DynamicComponent parent={rootKey} child={childKey} />
          <h2>Code</h2>
          <Code parent={rootKey} child={childKey + 'Code'} />
          {styleGuideConfig[rootKey].children[childKey].components.map(componentKey => (
            <Fragment key={componentKey}>
              <h3>{componentKey} Prop Types</h3>
              <PropTypesTable name={componentKey} />
            </Fragment>
          ))}
        </Fragment>
      ))}
    </Fragment>
  )
}

StyleGuideSection.propTypes = {
  rootKey: PropTypes.string.isRequired
}

export default StyleGuideSection

import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import { styleGuideData } from './styleGuideData'
import { Loader } from 'components/Common'

import Loadable from 'react-loadable'
import Code from './Code'
import PropTypesTable from './PropTypesTable'

const DynamicComponent = ({ parent, child }) => {
  const Comp = Loadable({
    loading: () => <Loader message={`Loading ${parent} - ${child}...`} />,
    loader: () => import(`./examples/components/${parent}/${child}`),
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
    <Fragment>
      <h1>{rootKey}</h1>
      <hr />
      {Object.keys(styleGuideData[rootKey].children).map(childKey => (
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
          <PropTypesTable components={styleGuideData[rootKey].children[childKey].components} />
        </Fragment>
      ))}
    </Fragment>
  )
}

StyleGuideSection.propTypes = {
  rootKey: PropTypes.string.isRequired
}

export default StyleGuideSection

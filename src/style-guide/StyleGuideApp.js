import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import { Col, Container, Row } from 'components/Common'
import { GlobalContainer } from 'components/Global/GlobalContainer'
import { Loader } from 'components/Common'
import Code from './Code'
import Loadable from 'react-loadable'
import PropTypesTable from './PropTypesTable'
import styleGuideConfig from 'strings/styleGuide/styleGuide.en.json'
import ThemeSelector from 'components/Global/ThemeSelector'

import './StyleGuideApp.scss'

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

const StyleGuideApp = () => {
  return (
    <GlobalContainer>
      <Container fluid>
        <Row>
          <Col xs="2">
            <div className="sidenav pt-2">
              <ThemeSelector />
              {Object.keys(styleGuideConfig).map(rootKey => (
                <Fragment key={rootKey}>
                  <h5>
                    <a href={`#${rootKey}`}>{rootKey}</a>
                  </h5>
                  {Object.keys(styleGuideConfig[rootKey].children).map(childKey => (
                    <Fragment key={childKey}>
                      <div className="ml-2 mb-2">
                        <a href={`#${childKey}`}>
                          {childKey
                            .replace(rootKey, '')
                            .replace(/([A-Z]+)/g, ' $1')
                            .replace(/([A-Z][a-z])/g, ' $1')}
                        </a>
                      </div>
                    </Fragment>
                  ))}
                </Fragment>
              ))}
              <ThemeSelector />
            </div>
          </Col>
          <Col xs="10">
            {Object.keys(styleGuideConfig).map(rootKey => (
              <Fragment key={rootKey}>
                <a name={rootKey} href="/">
                  <h1>{rootKey}</h1>
                </a>
                {Object.keys(styleGuideConfig[rootKey].children).map(childKey => (
                  <Fragment key={childKey}>
                    <a name={childKey} href="/">
                      <h2>
                        {childKey
                          .replace(rootKey, rootKey + ' - ')
                          .replace(/([A-Z]+)/g, ' $1')
                          .replace(/([A-Z][a-z])/g, ' $1')}
                      </h2>
                    </a>
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
            ))}
          </Col>
        </Row>
      </Container>
    </GlobalContainer>
  )
}

export default StyleGuideApp

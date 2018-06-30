import PropTypes from 'prop-types'
import { Redirect, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import React from 'react'

import { Loader } from '@myorg/components-common'

const loadableConfig = {
  delay: 200,
  timeout: 10000
}

const Routes = ({ strings }) => (
  <Switch>
    <Route
      exact
      path='/'
      component={Loadable({
        ...loadableConfig,
        loading: props => (
          <Loader {...props} message={`${strings.loading} ${strings.routes.styleGuide.displayName}...`} />
        ),
        loader: () => import('../StyleGuide/StyleGuideApp'),
        render(loaded, props) {
          const StyleGuideApp = loaded.default
          return <StyleGuideApp {...props} />
        }
      })}
    />
    <Route
      exact
      path="/:id"
      component={Loadable({
        ...loadableConfig,
        loading: props => (
          <Loader {...props} message={`${strings.loading} ${strings.routes.styleGuide.displayName}...`} />
        ),
        loader: () => import('../StyleGuide/StyleGuideApp'),
        render(loaded, props) {
          const StyleGuideApp = loaded.default
          return <StyleGuideApp {...props} />
        }
      })}
    />
    <Redirect to="/" />
  </Switch>
)

Routes.propTypes = {
  strings: PropTypes.object.isRequired
}

export default Routes

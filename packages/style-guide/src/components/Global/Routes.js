import { Redirect, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import React from 'react'

import { Loader } from '@myorg/components'

const loadableConfig = {
  delay: 200,
  timeout: 10000
}

const Routes = () => (
  <Switch>
    <Route
      exact
      path="/"
      component={Loadable({
        ...loadableConfig,
        loading: props => <Loader />,
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
        loading: props => <Loader />,
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

export default Routes

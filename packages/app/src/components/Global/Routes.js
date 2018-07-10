import PropTypes from 'prop-types'
import { Redirect, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import React from 'react'

import { GlobalImporter, Loader } from '@myorg/components'

const loadableConfig = {
  delay: 200,
  timeout: 10000
}

const Routes = ({ strings }) =>
  strings ? (
    <Switch>
      <Route
        exact
        path={strings.routes.home.path}
        component={Loadable({
          ...loadableConfig,
          loading: props => <Loader {...props} message={`${strings.loading} ${strings.routes.home.displayName}...`} />,
          loader: () => import('../Home/Home'),
          render(loaded, props) {
            const Home = loaded.default
            return (
              <GlobalImporter
                appName="app"
                stringNames={['home']}
                render={({ strings }) => <Home strings={strings} />}
              />
            )
          }
        })}
      />
      <Route
        exact
        path={strings.routes.about.path}
        component={Loadable({
          ...loadableConfig,
          loading: props => <Loader {...props} message={`${strings.loading} ${strings.routes.home.displayName}...`} />,
          loader: () => import('../About/About'),
          render(loaded, props) {
            const About = loaded.default
            return (
              <GlobalImporter
                appName="app"
                stringNames={['about']}
                render={({ strings }) => <About strings={strings} />}
              />
            )
          }
        })}
      />
      <Route
        exact
        path={strings.routes.siteMap.path}
        component={Loadable({
          ...loadableConfig,
          loading: props => (
            <Loader {...props} message={`${strings.loading} ${strings.routes.siteMap.displayName}...`} />
          ),
          loader: () => import('@myorg/components'),
          render(loaded, props) {
            const SiteMap = loaded.SiteMap
            return <SiteMap strings={strings.routes} />
          }
        })}
      />
      <Route
        path={strings.routes.todo.path}
        component={Loadable({
          ...loadableConfig,
          loading: props => <Loader {...props} message={`${strings.loading} ${strings.routes.todo.displayName}...`} />,
          loader: () => import('../Todo/TodoContainer')
        })}
      />
      <Route
        exact
        path={strings.routes.userSettings.path}
        component={Loadable({
          ...loadableConfig,
          loading: props => (
            <Loader {...props} message={`${strings.loading} ${strings.routes.userSettings.displayName}...`} />
          ),
          loader: () => import('@myorg/components'),
          render(loaded) {
            const UserSettings = loaded.UserSettings
            return <UserSettings />
          }
        })}
      />
      <Redirect to="/" />
    </Switch>
  ) : null

Routes.propTypes = {
  strings: PropTypes.object
}

export default Routes
